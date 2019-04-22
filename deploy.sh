#!/bin/bash

docker-compose down
git pull origin master
docker-compose up --build -d

echo "Deployed!"