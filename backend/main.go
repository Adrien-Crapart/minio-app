package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "minio-app/docs"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	httpSwagger "github.com/swaggo/http-swagger"
)

type File struct {
	Name         string    `json:"name"`
	UpdateTime   time.Time `json:"modTime"`
	Size         int64     `json:"size"`
	ContentType  string    `json:"contentType"`
	Tags         string    `json:"tags"`
	DownloadLink string    `json:"downloadLink"`
}

// Configuration struct
type Config struct {
    OpenWeatherMapAPIKey string `envconfig:"OPENWEATHERMAP_API_KEY"`
}

// WeatherResponse struct
type WeatherResponse struct {
    Temperature float64 `json:"temperature"`
    Description string  `json:"description"`
}

// @Summary Obtenir la météo actuelle en fonction de la localisation
// @Description Récupère les informations météorologiques actuelles en fonction de la latitude et de la longitude
// @ID get-weather
// @Accept json
// @Produce json
// @Param lat query number true "Latitude" minimum(-90) maximum(90)
// @Param lon query number true "Longitude" minimum(-180) maximum(180)
// @Success 200 {object} WeatherResponse
// @Router /api/v1/weather [get]
func GetWeather(w http.ResponseWriter, r *http.Request) {
    // Get latitude and longitude from request parameters
    lat := r.URL.Query().Get("lat")
    lon := r.URL.Query().Get("lon")

    if lat == "" || lon == "" {
        http.Error(w, "Latitude and Longitude are required", http.StatusBadRequest)
        return
    }

    // Make a request to OpenWeatherMap API
    apiKey := config.OpenWeatherMapAPIKey
    apiUrl := "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + apiKey
    response, err := http.Get(apiUrl)
    if err != nil {
        http.Error(w, "Failed to fetch weather data", http.StatusInternalServerError)
        return
    }
    defer response.Body.Close()

    // Decode JSON response
    var weatherData map[string]interface{}
    err = json.NewDecoder(response.Body).Decode(&weatherData)
    if err != nil {
        http.Error(w, "Failed to decode weather data", http.StatusInternalServerError)
        return
    }

    // Extract temperature and description from response
    temperature, ok := weatherData["main"].(map[string]interface{})["temp"].(float64)
    if !ok {
        http.Error(w, "Failed to extract temperature", http.StatusInternalServerError)
        return
    }

    description, ok := weatherData["weather"].([]interface{})[0].(map[string]interface{})["description"].(string)
    if !ok {
        http.Error(w, "Failed to extract weather description", http.StatusInternalServerError)
        return
    }

    // Create WeatherResponse struct
    weatherResponse := WeatherResponse{
        Temperature: temperature,
        Description: description,
    }

    // Convert to JSON and send the response
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(weatherResponse)
}

var config Config

func init() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    // Parse environment variables into Config struct
    err = envconfig.Process("", &config)
    if err != nil {
        log.Fatal("Error processing environment variables")
    }
}

var minioClient *minio.Client

func initMinioClient() (*minio.Client, error) {
	endpoint := "localhost:9000"
	accessKeyID := "minioadmin"
	secretAccessKey := "minioadmin"
	useSSL := false

	minioClient, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: useSSL,
	})
	if err != nil {
		log.Fatalln(err)
		return nil, err
	}

	return minioClient, nil
}

// getAllFilesHandler swagger
// @Summary Get all files
// @Description Get a list of all files with details
// @ID get-all-files
// @Produce json
// @Success 200 {array} File
// @Router /files [get]
func getAllFilesHandler(w http.ResponseWriter, r *http.Request) {
	bucketName := "data"
	doneCh := make(chan struct{})
	defer close(doneCh)

	objectCh := minioClient.ListObjects(r.Context(), bucketName, minio.ListObjectsOptions{
		Recursive: true,
	})

	var files []File

	for object := range objectCh {
		if object.Err != nil {
			http.Error(w, object.Err.Error(), http.StatusInternalServerError)
			return
		}
		info, err := minioClient.StatObject(r.Context(), bucketName, object.Key, minio.StatObjectOptions{})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		fileURL, err := minioClient.PresignedGetObject(r.Context(), bucketName, object.Key, time.Second*24*60*60, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		file := File{
			Name:         object.Key,
			UpdateTime:   object.LastModified,
			Size:         object.Size,
			ContentType:  info.ContentType,
			Tags:         info.UserMetadata["tags"],
			DownloadLink: fileURL.String(),
		}
		files = append(files, file)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(files)
}

// @Summary Ajouter un fichier
// @Description Ajoute un fichier dans le bucket Minio
// @ID add-file
// @Accept multipart/form-data
// @Param file formData file true "Fichier à ajouter"
// @Success 200 {string} string "Fichier ajouté avec succès"
// @Router /files [post]
func addFileHandler(w http.ResponseWriter, r *http.Request) {
    // Votre logique pour récupérer le fichier du formulaire
    file, fileHeader, err := r.FormFile("file")
    if err != nil {
        http.Error(w, "Impossible de récupérer le fichier", http.StatusBadRequest)
        return
    }
    defer file.Close()

    // Initialiser le client Minio
    minioClient, err := initMinioClient()
    if err != nil {
        log.Printf("Erreur d'initialisation du client Minio: %v", err)
        http.Error(w, "Erreur d'initialisation du client Minio", http.StatusInternalServerError)
        return
    }

    // Upload du fichier dans Minio
    bucketName := "data"
    contentType := "application/octet-stream"
	fileName := "test"

    _, err = minioClient.PutObject(
        context.Background(),
        bucketName,
        fileName, //fileHeader.Filename,
        file,
        -1, // size
        minio.PutObjectOptions{ContentType: contentType},
    )
    if err != nil {
        log.Printf("Erreur lors de l'ajout du fichier dans Minio: %v", err)
        http.Error(w, "Erreur lors de l'ajout du fichier dans Minio", http.StatusInternalServerError)
        return
    }

    // Répondre avec succès
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, "Fichier ajouté avec succès")
	log.Printf("Fichier ajouté avec succès: %s", fileHeader.Filename)
}

// @Summary Modifier un fichier
// @Description Modifie un fichier dans le bucket Minio
// @ID update-file
// @Accept multipart/form-data
// @Param file formData file true "Nouvelle version du fichier"
// @Param name path string true "Nom du fichier à modifier"
// @Success 200 {string} string "Fichier modifié avec succès"
// @Router /files/{name} [put]
func updateFileHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    fileName := vars["name"]

    // Votre logique pour récupérer le fichier du formulaire
    file, _, err := r.FormFile("file")
    if err != nil {
        http.Error(w, "Impossible de récupérer le fichier", http.StatusBadRequest)
        return
    }
    defer file.Close()

    // Initialiser le client Minio
    minioClient, err := initMinioClient()
    if err != nil {
        http.Error(w, "Erreur d'initialisation du client Minio", http.StatusInternalServerError)
        return
    }

    // Votre logique pour uploader la nouvelle version du fichier
    bucketName := "data"
    contentType := "application/octet-stream"

    _, err = minioClient.PutObject(
        context.Background(),
        bucketName,
        fileName,
        file,
        -1, // size
        minio.PutObjectOptions{ContentType: contentType},
    )
    if err != nil {
        http.Error(w, "Erreur lors de la mise à jour du fichier dans Minio", http.StatusInternalServerError)
        return
    }

    // Répondre avec succès
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, "Fichier modifié avec succès")
}

// @Summary Supprimer un fichier
// @Description Supprime un fichier du bucket Minio
// @ID delete-file
// @Param name path string true "Nom du fichier à supprimer"
// @Success 200 {string} string "Fichier supprimé avec succès"
// @Router /files/{name} [delete]
func deleteFileHandler(w http.ResponseWriter, r *http.Request) {
	// Parse parameters from the request, e.g., file name
	vars := mux.Vars(r)
	fileName := vars["name"]

	// Delete the file from the Minio bucket
	bucketName := "data"
	objectName := fileName
	err := minioClient.RemoveObject(context.Background(), bucketName, objectName, minio.RemoveObjectOptions{})
	if err != nil {
		http.Error(w, "Error deleting file from Minio", http.StatusInternalServerError)
		return
	}

	// Respond with success message or other relevant information
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("File deleted successfully"))
}


// @title Weather API
// @version 1.0
// @description API de météo en fonction de la localisation
// @termsOfService http://swagger.io/terms/
// @contact.email Your Email
// @host localhost:3000
// @BasePath /v1
// @schemes http
func main() {
	var err error
	minioClient, err = initMinioClient()
	if err != nil {
		log.Fatalln(err)
		return
	}

	router := mux.NewRouter()

	// Servez la documentation Swagger
	router.PathPrefix("/swagger/").Handler(httpSwagger.Handler(
		httpSwagger.URL("http://localhost:3000/swagger/doc.json"), // L'URL du fichier swagger.json généré
	))

	// Routes for file management
	router.HandleFunc("/files", getAllFilesHandler).Methods("GET")
	router.HandleFunc("/files/upload", addFileHandler).Methods("POST")
	router.HandleFunc("/files/{name}", updateFileHandler).Methods("PUT")
	router.HandleFunc("/files/{name}", deleteFileHandler).Methods("DELETE")
	router.HandleFunc("/weather", GetWeather).Methods("GET")

	port := ":3000"
	fmt.Printf("Server is running on port %s\n", port)
	log.Fatal(http.ListenAndServe(port, router))
}