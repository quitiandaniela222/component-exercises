import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦",
    information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices",
    description = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [language, setLanguage] = useState('english');

    const handleChangeLanguage = () => {
        if (language === 'english') {
            setLanguage('spanish');
        } else {
            setLanguage('english');
        }
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleChangeLanguage}>
                {language === 'english' ? 'Change Language' : 'Cambiar Idioma'}
            </button>
        </div>
    );
};

export default App;

