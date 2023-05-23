import React, { useState } from 'react';
import "../src/styles/check.css";

const App = () => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleItemToggle = (item) => {
        setCheckedItems((prevCheckedItems) =>
            prevCheckedItems.includes(item)
                ? prevCheckedItems.filter((checkedItem) => checkedItem !== item)
                : [...prevCheckedItems, item]
        );
    };

    return (
        <div className="checklist">
            <h2>Equipment Checklist</h2>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        id="clothing"
                        checked={checkedItems.includes('Appropriate clothing')}
                        onChange={() => handleItemToggle('Appropriate clothing')}
                    />
                    <label htmlFor="clothing">Appropriate clothing</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="sunscreen"
                        checked={checkedItems.includes('Sunscreen')}
                        onChange={() => handleItemToggle('Sunscreen')}
                    />
                    <label htmlFor="sunscreen">Sunscreen</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="binoculars"
                        checked={checkedItems.includes('Binoculars')}
                        onChange={() => handleItemToggle('Binoculars')}
                    />
                    <label htmlFor="binoculars">Binoculars</label>
                </li>
            </ul>
        </div>
    );
};

export default App;