package config

import "github.com/spf13/viper"

// Config holds the application configuration
type Config struct {
	MinioEndpoint  string
	MinioAccessKey string
	MinioSecretKey string
	BucketName     string
}

// LoadConfig loads configuration from environment variables or a config file
func LoadConfig() (*Config, error) {
	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	viper.SetConfigType("yaml")

	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	config := &Config{}
	err := viper.Unmarshal(config)
	return config, err
}