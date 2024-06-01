from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sign-up")
def sign_up():
    return render_template("sign-up.html")

@app.route("/sign-in")
def sign_in():
    return render_template("sign-in.html")

@app.route("/change-password")
def change_password():
    return render_template("change-password.html")

if __name__ == "__main__":
    app.run(debug=True)