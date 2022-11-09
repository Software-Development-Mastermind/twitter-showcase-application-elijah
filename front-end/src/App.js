import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Random from "./components/Random/Random";
import Showcase from "./components/Showcase/Showcase";
import TweetNavbar from "./components/Navbar/Navbar";
import NoPage from "./components/404/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <Header />
            <TweetNavbar />
            <Routes>
                <Route path="About" element={<About />} />
                <Route path="Random" element={<Random />} />
                <Route path="Showcase" element={<Showcase />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
