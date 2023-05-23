import React from 'react';
import "../src/styles/contact.css";

const App = ({ onClick }) => {
    const handleClick = () => {
        window.location.href = 'https://singita.com/';
    };

    return (
        <button className="contact-button" onClick={handleClick}>
            Contact Us
        </button>
    );
};


export default App;