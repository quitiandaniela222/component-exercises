import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦",
    information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices",
    description = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
            <p>Items in Cart: {cartCount}</p>
        </div>
    );
};

export default App;
