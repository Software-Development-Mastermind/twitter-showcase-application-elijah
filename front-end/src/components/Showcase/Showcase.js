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
                console.log(tweets.data.statuses)
                setTweetData(tweets.data.statuses);
            });

    };

    const display_tweets = () => {
        const tweet_list = tweetData.map((tweet, key)=> {
            let media = ''
            if(tweet.hasOwnProperty('extended_entities')) {
                media = tweet.extended_entities.media[0].media_url
            }
            return (
                <div key={key}>
                    {tweet.user.screen_name}
                    {tweet.user.name}
                    <img src={tweet.user.profile_image_url_https} alt='tweet'></img>
                    {tweet.full_text}
                    {tweet.favorite_count}
                    {tweet.retweet_count}          
                  
                
                </div>
            )
        })
        if(tweet_list.length > 0) return tweet_list
        else {
            return (
                <div>Error, user not found</div>
            )
        }
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
