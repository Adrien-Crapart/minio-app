package handler

import (
	"context"
	"net/http"
	"path/filepath"

	"minio-app/backend/config"
	"minio-app/backend/minio"

	"github.com/labstack/echo/v4"
	"github.com/minio/minio-go/v7"
)

// UploadFile handles file upload to Minio
func UploadFile(c echo.Context) error {
	file, err := c.FormFile("file")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "File not provided"})
	}

	// Initialize Minio client
	cfg, err := config.LoadConfig()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to load configuration"})
	}

	minioClient, err := minio.NewMinioClient(cfg)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to initialize Minio client"})
	}

	// Open the file
	src, err := file.Open()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to open file"})
	}
	defer src.Close()

	// Upload the file with the same name and extension
	objectName := filepath.Base(file.Filename)
	_, err = minioClient.PutObject(context.Background(), cfg.BucketName, objectName, src, file.Size, minio.PutObjectOptions{})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to upload file to Minio"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "File uploaded successfully"})
}