package main

import (
	"log"
	"net/http"

	"github.com/Adrien-Crapart/minio-app/backend/api/upload"
	"github.com/Adrien-Crapart/minio-app/backend/config"
)

func main() {
	cfg := config.LoadConfig()

	uploadHandler := upload.NewHandler(cfg.MinioEndpoint, cfg.MinioAccessKey, cfg.MinioSecretKey, cfg.BucketName)

	http.HandleFunc("/upload", uploadHandler.UploadFile)

	log.Fatal(http.ListenAndServe(":8080", nil))
}