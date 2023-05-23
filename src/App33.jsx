import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRAVEL AND SAFARIS IN RWANDA◦",
    information = "Planning your vacation in Seychelles has a unique meaning of combining luxuries under the sun in one of the most exclusive beach destinations in the world.",
    description = "Step into paradise." }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <p>{description}</p>
            <button onClick={handleButtonClick}>
                Clicks: {clickCount}
            </button>
        </div>
    );
};

export default App;