import mysql.connector
from config import MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB

def get_db_connection():
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    return conn

def insert_text(text):
    conn = get_db_connection()
    cursor = conn.cursor()
    query = "INSERT INTO text (content) VALUES (%s)"
    values = (text,)
    cursor.execute(query, values)
    conn.commit()
    cursor.close()
    conn.close()

def insert_user(username, password, email, profile_image):
    conn = get_db_connection()
    cursor = conn.cursor()
    query = "INSERT INTO users (username, password, email, profile_image) VALUES (%s, %s, %s, %s)"
    values = (username, password, email, profile_image)
    cursor.execute(query, values)
    conn.commit()
    cursor.close()
    conn.close()

def get_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    query = "SELECT * FROM users"
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return users
