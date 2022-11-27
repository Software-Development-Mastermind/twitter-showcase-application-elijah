import "./Random.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Random = () => {
    const [randomUserData, setRandomUserData] = useState([])

    const favorite_twitter_users = [
        "@kurz_gesagt",
        "@jordanbpeterson",
        "@timkennedymma",
        "@nasa",
        "@neiltyson",
    ];

    const handleClick = (e) => {
        e.preventDefault();
        const randomUser = Math.floor(Math.random() * favorite_twitter_users.length);
        const result = favorite_twitter_users[randomUser];
        getRandomData(result)
    };

    const getRandomData = (randomUser) => {
        axios.get("/RandomTweet", { params: { random_user: randomUser }}).then((randomTweet) => {
            setRandomUserData(randomTweet.data.statuses)
        }).catch(err => console.log(err.message))
    }

    const renderExtendedEntities = (randomTweet) => {
        if(randomTweet.hasOwnProperty('extended_entities')){
            return (<img src={randomTweet.extended_entities.media[0].media_url} alt='media' />)
        }
        return <></>
    }

    const display_random_tweets = () => {
            const tweetRandomizer = Math.floor(Math.random() * 10)
            const randomTweetList = randomUserData.map((randomTweet, key) => {
                return (
                        <div className="tweet" key={key}>
                        {randomTweet.user.screen_name}
                        {randomTweet.user.name}
                        <img src={randomTweet.user.profile_image_url_https} alt={randomTweet.profile_image_url_https} />
                        {randomTweet.full_text}
                        {randomTweet.favorite_count}
                        {randomTweet.retweet_count} 
                        {renderExtendedEntities(randomTweet)}                    
                    </div>
                )
            })
                
                return randomTweetList[tweetRandomizer]
            }

    return (
        <div className="random-container">
            <h1 className="random-header">Random Tweet Page</h1>
            {display_random_tweets()}
            <Button onClick={handleClick}>Get A Random Tweet!</Button>
        </div>
    );
};

export default Random;
