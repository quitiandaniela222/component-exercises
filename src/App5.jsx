import React from 'react';
import "../src/styles/calculator.css";


const App = ({ imageUrl = "https://images.ctfassets.net/wds1hqrprqxb/4RVoQC2mSXRNYQdUMJ7CIN/dec02cc2add339e28e48a9d6e3ade184/SS_WILDLIFE_Elephant_Ross_Couper_214.jpg?w=930&h=1000&q=95&fm=webp" }) => {
    return (
        <div className="zoo-card">
            <div className="content-wrapper">
                <div className="elephant-container">
                    <img src={imageUrl} alt="Safari Image" className="elephant-image" />
                </div>
                <div className="weather-container">
                    <iframe
                        src="https://meteodays.com/es/weather/maps/afrika?t=1684504800"
                        width="100%"
                        height="119%"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default App;