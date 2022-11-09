from flask import Flask

app = Flask(__name__)


@app.route("/fakeData")
def fakeData():
    return {"data": ["data1", "data2", "data3"]}


if __name__ == "__main__":
    app.run(debug=True)
