import "./Random.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Random = () => {
    const [text, setText] = useState("");
    // const [randomData, setRandomData] = useState("");
    // useEffect(() => {
    //     fetch("/randomData")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setRandomData(data);
    //             console.log(data);
    //         });
    // }, []);

    const testArray = [
        "kurzegast",
        "Jordan Peterson",
        "Tim Kennedy",
        "Mikael Akerfeldt",
        "Ben Eller",
    ]; //This will be replaced with user ID's to send GET requests to pull one of their tweets

    const handleClick = (e) => {
        e.preventDefault();
        const randomUser = Math.floor(Math.random() * testArray.length);
        const result = testArray[randomUser];
        setText(result);
        console.log(result);
    };

    return (
        <div className="random-container">
            <h1 className="random-header">Random Tweet Page</h1>
            <p>{text}</p>
            {/* {randomData.data} */}

            <Button onClick={handleClick}>Get A Random Tweet!</Button>
        </div>
    );
};

export default Random;
