import "./Random.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Random = () => {
    const [text, setText] = useState("");
    
    const favorite_twitter_users = [
        "kurzegast",
        "Jordan Peterson",
        "Tim Kennedy",
        "Mikael Akerfeldt",
        "Ben Eller",
    ];

    const handleClick = (e) => {
        e.preventDefault();
        const randomUser = Math.floor(Math.random() * favorite_twitter_users.length);
        const result = favorite_twitter_users[randomUser];
        setText(result);
        
        getRandomData(result)
    };

    const getRandomData = (randomUser) => {
        axios.get("/RandomTweet", { params: { random_user: randomUser }}).then((randomTweet) => {
            console.log(randomTweet)
        })

    }

    return (
        <div className="random-container">
            <h1 className="random-header">Random Tweet Page</h1>
            <p>{text}</p>
            {/* {randomData.map((tweet) => {
                return <p>{tweet.text}</p>;
            })} */}

            <Button onClick={handleClick}>Get A Random Tweet!!!</Button>
        </div>
    );
};

export default Random;
