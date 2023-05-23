import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦",
    information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices",
    description = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className={`safari-container ${theme}`}>
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleThemeChange}>
                Change Theme
            </button>
        </div>
    );
};

export default App;
