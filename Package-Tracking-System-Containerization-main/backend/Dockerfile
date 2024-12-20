# Use the official Go image
FROM golang:1.23

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the Go application port
EXPOSE 3000

# Command to run the Go application
CMD ["./main"]
