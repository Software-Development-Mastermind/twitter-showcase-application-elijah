import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";
import axios from "axios";

const Showcase = () => {
    const [searchInput, setSearchInput] = useState("");
    const [userHasSearched, setUserHasSearched] = useState(false);
    const [tweetData, setTweetData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput.length > 0) setUserHasSearched(true);
        axios
            .get("/SearchTweets", { params: { userInput: searchInput } })
            .then((tweets) => {
                setTweetData(tweets.data.statuses);
                console.log(tweetData);
            });
    };

    const renderExtendedEntities = (tweet) => {
        if (tweet.hasOwnProperty("extended_entities")) {
            return (
                <div className="extended-media-container">
                    <img
                        src={tweet.extended_entities.media[0].media_url}
                        alt="media"
                        className="tweet-extended-media"
                    />
                </div>
            );
        }
        return <></>;
    };

    const display_tweets = () => {
        const tweet_list = tweetData.map((tweet, key) => {
            return (
                <div className="tweet" key={key}>
                    <span className="image-container">
                        <img
                            src={tweet.user.profile_image_url_https}
                            alt={tweet.profile_image_url_https}
                            className="tweet-profile-pic"
                        />
                    </span>
                    <span>
                        <span className="tweet-author">
                            <span className="tweet-username">
                                {tweet.user.name}
                            </span>
                            <span className="tweet-handle">
                                @{tweet.user.screen_name}
                            </span>
                        </span>
                        <div className="tweet-body">
                            <div className="tweet-text">{tweet.full_text}</div>
                        </div>
                        <div className="tweet-metrics">
                            <span className="tweet-retweet-count">
                                {tweet.retweet_count}
                            </span>
                            <span className="tweet-favorite-count">
                                {tweet.favorite_count}
                            </span>
                        </div>

                        {renderExtendedEntities(tweet)}
                    </span>
                </div>
            );
        });
        if (tweet_list.length > 0) {
            return tweet_list;
        } else if (tweet_list.length === 0 && userHasSearched === true) {
            return <div>Error, no matches found</div>;
        } else
            return <div>Search for tweets by username or by text-match </div>;
    };

    return (
        <div className="showcase-container">
            <Form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder="Ex: @nasa for NASA's tweets, or NASA to match tweets containing the string 'NASA' "
                    required
                />
                <Button className="search-button" type="submit">
                    Search User
                </Button>
            </Form>
            <div>{display_tweets()}</div>
        </div>
    );
};

export default Showcase;
