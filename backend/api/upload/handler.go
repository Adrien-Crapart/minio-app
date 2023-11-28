package upload

import (
	_ "minio-app/backend/api/upload"

	"github.com/gin-gonic/gin"
	_ "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
)

// SetupRouter configures the API routes
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Enable swagger docs
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Group for file upload API
	uploadGroup := r.Group("/upload")
	{
		uploadGroup.POST("/", UploadFile)
	}

	return r
}