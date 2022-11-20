import requests, os
from flask import Flask, request
from flask_restful import Resource, Api
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
load_dotenv()

api_key = os.getenv("API_KEY")
api_secret_key = os.getenv("SECRET_API_KEY")
bearer_token = os.getenv("BEARER_TOKEN")

headers = {"Authorization": f"Bearer {bearer_token}", "Accept": "application/json"}


@app.route("/SearchTweets", methods=["GET"])
def get_tweets():
    args = request.args
    # print(args)
    screen_name = args["screen_name"]
    tweet_response = requests.get(
        f"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={screen_name}&count=5",
        headers=headers,
    )
    print(dir(tweet_response))
    if tweet_response.ok == True:
        print("user found")
        return tweet_response.json()
    else:
        return "error"


@app.route("/RandomTweet", methods=["GET"])
def get_random_tweet():
    random_tweet = request.args
    random_screen_name = random_tweet["screen_name"]
    random_tweet_response = requests.get(
        f"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={random_screen_name}&count=1",
        headers=headers,
    )

    return random_tweet_response.json()


if __name__ == "__main__":
    app.run(debug=True)
