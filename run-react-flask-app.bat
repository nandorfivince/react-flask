@echo off

for /f "tokens=1" %%i in ('hostname') do set host=%%i
for /f "tokens=1" %%i in ('ping -4 %host% -n 1 ^| findstr /i "Pinging"') do set ip=%%i
set ip=%ip:~8%
setx MY_IP %ip%
echo IP address of the host machine: %ip%
echo Host IP address environment variable: %MY_IP%

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
set FLASK_APP=flask-server/server.py
docker-compose build --no-cache
docker-compose up -d

echo Waiting for Flask application loads
:loop
powershell -command "& { $response = Invoke-WebRequest -UseBasicParsing -Uri http://%MY_IP%:5000 -Method Head; if ($response.StatusCode -eq 200) { exit 0 } else { Start-Sleep -Seconds 1; goto loop } }"

echo Start the React application
echo Open in browser...
start http://localhost:3000
