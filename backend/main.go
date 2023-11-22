package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)
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

type File struct {
	Name         string    `json:"name"`
	UpdateTime   time.Time `json:"modTime"`
	Size         int64     `json:"size"`
	ContentType  string    `json:"contentType"`
	Tags         string    `json:"tags"`
	DownloadLink string    `json:"downloadLink"`
}

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


func main() {
	var err error
	minioClient, err = initMinioClient()
	if err != nil {
		log.Fatalln(err)
		return
	}

	router := mux.NewRouter()

	router.HandleFunc("/files", getAllFilesHandler).Methods("GET")
	// Add other CRUD routes

	port := ":3000"
	fmt.Printf("Server is running on port %s\n", port)
	log.Fatal(http.ListenAndServe(port, router))
}