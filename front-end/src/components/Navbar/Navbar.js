import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const TweetNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <span>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1177/1177491.png"
                    alt="navbar icon"
                    className="nav-icon"
                ></img>
            </span>
            <div className="nav-header">Twitter Showcase App</div>
            <Container className="nav-container">
                <Nav variant="pills" className="navbar-links">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="../Showcase">
                        Showcase
                    </NavLink>
                    <NavLink className="nav-link" to="../Random">
                        Random Tweets
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TweetNavbar;
