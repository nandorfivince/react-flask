from flask import Flask, request
from datetime import datetime
import pandas as pd

app = Flask(__name__)

@app.route("/console", methods=["POST"])
def console():
    text = request.data.decode('utf-8')
    print(text)
    return text

@app.route("/current-date")
def get_current_date():
    now = datetime.now()
    date = now.strftime("%Y-%m-%d")  # YYYY-MM-DD formátumban adja vissza a dátumot
    return date

@app.route("/current-time")
def get_current_time():
    now = datetime.now()
    time = now.strftime("%H:%M:%S")  # ÓÓ:PP:MM formátumban adja vissza az időt
    return time

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")
