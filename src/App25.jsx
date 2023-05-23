import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦",
    information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices",
    initialDescription = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [description, setDescription] = useState(initialDescription);
    const [previousDescription, setPreviousDescription] = useState('');

    const handleUpdateDescription = () => {
        setPreviousDescription(description);
        setDescription('Updated description');
    };

    const handleUndo = () => {
        setDescription(previousDescription);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleUpdateDescription}>
                Update Description
            </button>
            <button onClick={handleUndo}>
                Undo
            </button>
        </div>
    );
};

export default App;
