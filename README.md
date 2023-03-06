sandboxing


react-flask
    client
        npx createe-react-app client
        npm start
        npm run build
    flask-server
        python3 -m venv venv
        source venv/bin/activate
        pip install Flask
        pip install mysql-connector-python
        sudo apt-get update
        sudo apt-get install mysql-server
        sudo systemctl start mysql
        python3 server.py
