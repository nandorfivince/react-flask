from flask import Flask, request, jsonify
from models import insert_text, insert_user, get_users
from config import MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB

app = Flask(__name__)

# Console API Route
@app.route("/console", methods=["POST"])
def console():
    text = request.data.decode('utf-8')
    print(text)
    insert_text(text)
    return text

# Users API Route
@app.route('/users', methods=['POST', 'GET'])
def users():
    if request.method == 'POST':
        data = request.data.decode('utf-8')
        data = data.split(',')
        username = data[0]
        password = data[1]
        email = data[2]
        profile_image = data[3]
        insert_user(username, password, email, profile_image)
        return 'User created successfully.'
    elif request.method == 'GET':
        users = get_users()
        user_list = []
        for user in users:
            user_list.append(user[1])
        user_string = '\n'.join(user_list)
        return user_string

if __name__ == "__main__":
    app.run(debug=False)
