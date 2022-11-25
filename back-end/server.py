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
params = {
        "expansions": "attachments.media_keys,author_id",
        "media.fields": "url",
        "tweet.fields": "created_at,public_metrics,entities,text",
        "user.fields": "username,name,profile_image_url",
        "tweet_mode": "extended"
    }


@app.route("/SearchTweets", methods=["GET"])
def get_tweets():
    args = request.args
    user_input = args["userInput"]
   
    url = f"https://api.twitter.com/1.1/search/tweets.json?q=from:{user_input}"
    tweet_response = requests.get(
        url,
        headers=headers,
        params=params,
    )
    tweet_data = tweet_response.json()
    return tweet_data
   


if __name__ == "__main__":
    app.run(port=5001, debug=True)
