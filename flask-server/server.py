from flask import Flask, request

app = Flask(__name__)

# Console API Route
@app.route("/console", methods=["POST"])
def console():
    text = request.json.get("text")
    print(text)
    return text

if __name__ == "__main__":
    app.run(debug=True)
