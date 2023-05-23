import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS AND SAFARIS IN ZAMBIA ◦",
    information = "Your exclusive trip to Zambia will teem with wildlife in an environment of rich wildlife diversity alongside the impressive ''thundering smoke'' of the much-famous and glorious Victoria Falls.", }) => {
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
            <button onClick={handleChangeLanguage}>
                {language === 'english' ? 'Change Language' : 'Cambiar Idioma'}
            </button>
        </div>
    );
};

export default App;

