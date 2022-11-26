import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";
import axios from "axios";

const Showcase = () => {
    const [searchInput, setSearchInput] = useState("");
    const [userHasSearched, setUserHasSearched] = useState(false)
    const [tweetData, setTweetData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchInput.length > 0) setUserHasSearched(true)
        axios
            .get("/SearchTweets", { params: { userInput : searchInput } })
            .then((tweets) => {
                console.log(tweets.data.statuses)
                setTweetData(tweets.data.statuses);
            });

    };

    const renderExtendedEntities = (tweet) => {
        if(tweet.hasOwnProperty('extended_entities')){
            return (<img src={tweet.extended_entities.media[0].media_url} alt='media' />)
        }
        return <></>
    }

    const display_tweets = () => {
        const tweet_list = tweetData.map((tweet, key)=> {
            return (
                    <div className="tweet" key={key}>
                        {tweet.user.screen_name}
                        {tweet.user.name}
                        <img src={tweet.user.profile_image_url_https} alt={tweet.profile_image_url_https} />
                        {tweet.full_text}
                        {tweet.favorite_count}
                        {tweet.retweet_count}  
                        {renderExtendedEntities(tweet)}       
                    </div>
                )})
                if (tweet_list.length > 0) {
                    return tweet_list}
                else if (tweet_list.length === 0 && userHasSearched === true ){
                    return (
                        <div>Error, no matches found</div>
                    )
                } else return <div>Search for tweets by username or by text-match </div>
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
