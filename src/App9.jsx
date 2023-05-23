import React from 'react';
import "../src/styles/information.css";

const App = ({ title="◦A RESTORATIVE EXPERIENCE.◦", 
caption="Find your sanctuary", 
information="Featuring unfiltered space & time, Singita’s award-winning lodges and camps offer remote locations, complete privacy and intuitive service at every turn. Each unique setting allows guests to truly connect with nature, and experience Africa’s most pristine wildlife & wilderness up close."}) => {
    return (
        <div className="safari-container">
        <h2>{title}</h2>
        <p>{caption}</p>
        <p>{information}</p>
        <a href="https://singita.com/" className="see-more">See More</a>
        </div>
    );
    };

export default App;
