package cmd

import "minio-app/backend/api/router"

// StartServer starts the server
func StartServer() {
	r := router.SetupRouter()
	r.Start(":3000")
}