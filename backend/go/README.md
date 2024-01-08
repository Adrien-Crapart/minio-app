# To run localy the API
> go run main.go

# Install the librairies
> go get github.com/minio/minio-go/v7
> go get -u github.com/swaggo/swag/cmd/swag
> go install github.com/swaggo/swag/cmd/swag
> go get github.com/swaggo/http-swagger
> go get github.com/gorilla/mux
> go get github.com/spf13/viper
> go get github.com/joho/godotenv
> go get github.com/kelseyhightower/envconfig

# Generate the swagger documentation
> swag init -g api/upload/swagger.go