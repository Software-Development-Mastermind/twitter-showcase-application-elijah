import requests, os
from flask import Flask
from flask_restful import Resource, Api
from dotenv import load_dotenv
from flask_cors import CORS


# testData = {"data": ["data1", "data2", "data3"]}
# randomData = {"data": ["randomdata1", "randomdata2", "randomdata3"]}

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
load_dotenv()

api_key = os.getenv("API_KEY")
api_secret_key = os.getenv("SECRET_API_KEY")
bearer_token = os.getenv("BEARER_TOKEN")

headers = {"Authorization": f"Bearer {bearer_token}", "Accept": "application/json"}
params = {}


@app.route("/", methods=["GET"])
def home_page():
    return print("hello homepage")


@app.route("/fakeData", methods=["GET"])
def fakeData():
    return testData


@app.route("/randomData", methods=["GET"])
def randData():
    return randomData


# @app.route("/Showcase", methods=["GET"])
def get_tweets(url, max_results="7"):
    response = requests.get(
        "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=recent",
        headers=headers,
    )
    print(response.json()["statuses"][0]["created_at"])

    # print(response.json().data)


# user_id
def get_user():
    response = requests.get(
        "https://api.twitter.com/1.1/users/show.json?screen_name=nasa", headers=headers
    )
    print(response.json()["name"])


def get_timeline():
    response = requests.get(
        "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=nasa&count=7",
        headers={
            "Authorization": "Bearer " + bearer_token,
            "Accept": "Application/json",
        },
    )
    print(response.json()[0]["user"]["description"])


get_tweets()
get_user()
get_timeline()

if __name__ == "__main__":
    app.run(debug=True)
