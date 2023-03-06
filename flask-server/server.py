from flask import Flask, request, jsonify

app = Flask(__name__)

# Console API Route
@app.route("/console", methods=["POST"])
def console():
    data = request.json
    text = data["text"]
    print(text)
    return jsonify({"text": text})

if __name__ == "__main__":
    app.run(debug=False)
