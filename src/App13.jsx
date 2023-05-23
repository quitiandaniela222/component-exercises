import React from 'react';
import "../src/styles/contact.css";

const App = ({ onClick }) => {
    const customClick = () => {
        window.location.href = 'https://www.aventuraafrica.com/viajes/la-cara-mas-virgen-y-tropical-de-sudafrica-de03';
    };

    return (
        <button className="custom-rate" onClick={customClick}>
            Custom Rate
        </button>
    );
};


export default App;