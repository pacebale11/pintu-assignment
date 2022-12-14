FROM golang:1.19-alpine

ARG SSH_KEY
ARG PORT


# Set the Current Working Directory inside the container
WORKDIR /app

# Setup the config below to be able to call private repo
RUN apk add git 


RUN git config --global url."git@github.com:".insteadOf "https://github.com/"

#Copy all data from directory to docker

COPY . .

EXPOSE 3000

# Build the Go app
RUN go build -o main



CMD ["./main"]


