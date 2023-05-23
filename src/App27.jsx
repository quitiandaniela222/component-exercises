import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦",
    information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices",
    description = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleToggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            {isFavorite && <p>Added to Favorites!</p>}
        </div>
    );
};

export default App;
