from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "This is the home page"

@app.route("/test")
def test():
    return {"Testing":"Im testing"}

if __name__ == "__main__":
    app.run(debug = True)