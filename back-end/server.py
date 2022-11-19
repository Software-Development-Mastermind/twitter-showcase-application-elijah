import requests, os
from flask import Flask, request
from flask_restful import Resource, Api
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
load_dotenv()
# search_tweets_url = (
#     "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=nasa&count=5"
# )

screen_name = "nasa"

api_key = os.getenv("API_KEY")
api_secret_key = os.getenv("SECRET_API_KEY")
bearer_token = os.getenv("BEARER_TOKEN")

headers = {"Authorization": f"Bearer {bearer_token}", "Accept": "application/json"}


@app.route("/SearchTweets", methods=["GET"])
def get_tweets():
    args = request.args
    print(args)
    screen_name = args["screen_name"]
    tweetResponse = requests.get(
        f"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={screen_name}&count=5",
        headers=headers,
    )
    print(tweetResponse.content)
    return tweetResponse.json()


if __name__ == "__main__":
    app.run(debug=True)
