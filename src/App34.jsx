import React, { useState } from 'react';
import "../src/styles/introduction.css";

const App = ({ title = "◦TRIPS TO ZANZIBAR◦", information = "Savor your trip to Zanzibar capturing the incredible essence of ''the island of spices", description = "in one of the best beaches in East Africa and one of the best diving destinations, par excellence." }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDescription, setFilteredDescription] = useState(description);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filtered = description.includes(value) ? description : "";
        setFilteredDescription(filtered);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{information}</p>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
            />
            <p>{filteredDescription}</p>
        </div>
    );
};

export default App;
