import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS AND SAFARIS IN KENYA◦",
    information = "Welcome to the ancestral home of the safari, Kenya, where you will hear the roaring call of the wild from Africa live, peppered with vast herds of wildlife.",
    description = "You will affiliate with the land of variety." }) => {
    const [buttonColor, setButtonColor] = useState('blue'); // Estado inicial del color del botón

    const handleButtonClick = () => {
        setButtonColor('red');
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button
                className="color-changing-button"
                style={{ backgroundColor: buttonColor }}
                onClick={handleButtonClick}
            >
                Change Color
            </button>
        </div>
    );
};

export default App;
