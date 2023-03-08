#!/bin/bash

echo "Stop all of the running containers"
docker-compose down

echo "Remove stopped containers"
docker container prune -f

echo "Remove the old venv"
rm -rf venv

echo "Create and activate the new venv"
python3 -m venv venv
source venv/bin/activate
pip install -r flask-server/requirements.txt

echo "Start the docker containers"
docker-compose up -d

echo "Waiting for Flask application loads"
while ! curl -s http://192.168.0.121:5000 > /dev/null; do
    sleep 1
done

echo "Start the React application"
echo "Open in browser..."
open http://localhost:3000
