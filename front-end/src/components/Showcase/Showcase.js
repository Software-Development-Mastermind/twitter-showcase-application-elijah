import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";

const Showcase = () => {
    const [searchInput, setSearchInput] = useState();

    // useEffect(() => {
    //     fetch("/fakeData")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setShowCaseData(data);
    //             console.log(data);
    //         });
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        setSearchInput("");
    };

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
            <p className="showcase-body">body</p>

            {/* {!showCaseData ? (
                <p>...Loading</p>
            ) : (
                showCaseData.data.map((d, i) => {
                    return <p key={i}>{d}</p>;
                })
            )} */}
        </div>
    );
};

export default Showcase;
