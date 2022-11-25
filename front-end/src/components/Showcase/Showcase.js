import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";
import axios from "axios";

const Showcase = () => {
    const [searchInput, setSearchInput] = useState("");
    const [tweetData, setTweetData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get("/SearchTweets", { params: { userInput : searchInput } })
            .then((tweets) => {
                console.log(tweets)
                setTweetData(tweets.data.statuses);
            });

    };

    const display_tweets = () => {
        const tweet_list = tweetData.map((tweet)=> {
            return (
                <div>
                    {tweet.user.screen_name}
                    {tweet.user.name}
                    {tweet.user.profile_image_url_https}
                    {tweet.full_text}
                    {tweet.favorite_count}
                    {tweet.retweet_count}
                </div>
            )

        })
        return tweet_list
    }

    return (
        <div className="showcase-container">
            <Form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    required
                />
                <Button className="search-button" type="submit">
                    Search User
                </Button>
            </Form>
            <div>
            {display_tweets()}
            </div>
        </div>
    );
};

export default Showcase;
