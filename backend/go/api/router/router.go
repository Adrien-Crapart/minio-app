package router

import (
	"minio-app/backend/api/handler"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// SetupRouter sets up the Echo router
func SetupRouter() *echo.Echo {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())

	// Routes
	e.POST("/upload", handler.UploadFile)

	// Swagger
	e.GET("/swagger/*", echoSwagger.WrapHandler)

	return e
}