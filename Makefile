DB_URL=postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable

postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

createdb:
	docker exec -it postgres12 createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres12 dropdb simple_bank

migrateup:
	migrate -path backend/migration -database "$(DB_URL)" -verbose up

migratedown:
	migrate -path backend/migration -database "$(DB_URL)" -verbose down

.PHONY: postgres createdb dropdb migrateup migratedown