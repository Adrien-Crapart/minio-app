package api

import (
	"backend/pkg/s3"
	"context"
	"net/http"
	"path/filepath"

	_ "minio-app/backend/pkg/s3"

	"github.com/labstack/echo/v4"
)

// FileHandler is the handler for file-related operations.
type FileHandler struct {
	S3Client *s3.S3Client
}

// NewFileHandler creates a new FileHandler with the given S3 client.
func NewFileHandler(s3Client *s3.S3Client) *FileHandler {
	return &FileHandler{
		S3Client: s3Client,
	}
}

// ImportFile imports a file into S3 Minio.
// @Summary Import a file into S3 Minio.
// @Description Import a file into S3 Minio while retaining the original name and extension.
// @Tags file
// @Accept multipart/form-data
// @Produce json
// @Param file formData file true "File to import"
// @Success 200 {string} string "File imported successfully"
// @Failure 400 {string} string "Bad request"
// @Failure 500 {string} string "Internal server error"
// @Router /import [post]
func (fh *FileHandler) ImportFile(c echo.Context) error {
	file, err := c.FormFile("file")
	if err != nil {
		return c.String(http.StatusBadRequest, "Bad request")
	}

	src, err := file.Open()
	if err != nil {
		return c.String(http.StatusInternalServerError, "Internal server error")
	}
	defer src.Close()

	// Use the original file name and extension
	objectName := filepath.Base(file.Filename)

	// Upload the file to S3
	err = fh.S3Client.UploadFile(context.Background(), objectName, src, file.Size)
	if err != nil {
		return c.String(http.StatusInternalServerError, "Internal server error")
	}

	return c.String(http.StatusOK, "File imported successfully")
}

// RegisterFileHandlers registers file-related handlers.
func RegisterFileHandlers(group *echo.Group) {
	s3Client, err := s3.NewS3Client("localhost:9000", "minioadmin", "minioadmin", "data")
	if err != nil {
		panic(err)
	}

	fileHandler := NewFileHandler(s3Client)

	group.POST("/import", fileHandler.ImportFile)
}