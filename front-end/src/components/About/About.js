import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">Welcome to the twitter showcase app!</h1>
            <p className="about-body">This application can search the Twitter API by either a username or a text-string match. Under the showcase tab, you are able to search the last 10 tweets
                of a specified user or you can search the most recent 10 tweets containing the entered string. Additionally, on the Random Tweets page, by clicking the button, you are able to
                pull a random tweet from my 5 favorite twitter users: </p>
        </div>
    );
};

export default About;
