import React, { useState } from 'react';

const App = ({ title="◦TRIPS AND SAFARIS IN NAMIBIA◦", caption="Delicate saffron-scented sunrises, world-class fauna, and endless paths of comfort.", 
information="Remote Namibia, home to a mix of endangered savannah and desert animals.",
description=" envueltos de grandes cielos y un lujoso e infinito paisajismo." }) => {
    const [showInfo, setShowInfo] = useState(true);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className="safari-container">
            <h2>{title}</h2>
            <p>{caption}</p>
            {showInfo && (
                <>
                    <p>{information}</p>
                    <p>{description}</p>
                </>
            )}
            <button className="toggle-info" onClick={toggleInfo}>
                {showInfo ? 'Hide Information' : 'Show Information'}
            </button>
        </div>
    );
};

export default App;
