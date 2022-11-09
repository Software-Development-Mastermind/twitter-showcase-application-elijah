import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const TweetNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="nav-container">
                <Nav variant="pills" className="navbar">
                    <NavLink className="nav-link" to="../About">
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
