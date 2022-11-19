import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";
import axios from "axios";

const Showcase = () => {
    const [searchInput, setSearchInput] = useState("");
    const [tweetData, setTweetData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get("/SearchTweets", { params: { screen_name: searchInput } })
            .then((tweets) => {
                tweets = tweets.data;
                setTweetData(tweets);
            });
    };

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
            {tweetData.map((tweet) => {
                return (
                    <>
                        <p>{tweet.text}</p>
                        <p> Likes: {tweet.favorite_count}</p>
                        <p> Retweets: {tweet.retweet_count}</p>
                        <p> User @{tweet.user.name}</p>
                        {/* {console.log(tweet)} */}
                    </>
                );
            })}
        </div>
    );
};

export default Showcase;
