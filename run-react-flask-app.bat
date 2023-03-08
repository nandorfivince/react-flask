@echo off

echo Stop all of the running containers
docker-compose down

echo Remove stopped containers
docker container prune -f

echo Remove the old venv
rmdir /s /q venv

echo Create and activate the new venv
python -m venv venv
venv\Scripts\activate.bat
pip install -r flask-server\requirements.txt

echo Start the docker containers
docker-compose up -d

echo Waiting for Flask application loads
:loop
powershell -command "& { $response = Invoke-WebRequest -UseBasicParsing -Uri http://192.168.0.121:5000 -Method Head; if ($response.StatusCode -eq 200) { exit 0 } else { Start-Sleep -Seconds 1; goto loop } }"

echo Start the React application
echo Open in browser...
start http://localhost:3000
