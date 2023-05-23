import React from 'react';
import "../src/styles/introduction.css";

const App = ({ title="◦TRAVEL AND SAFARIS IN MOZAMBIQUE◦", caption="Delicate saffron-scented sunrises, world-class fauna, and endless paths of comfort.", 
information="In Mozambique's beach paradise, ancestral customs and ways of life live on, where new generations fight for the amazing richness of its beautiful natural landscapes.", }) => {
    return (
        <div className="safari-container">
        <h2>{title}</h2>
        <p>{caption}</p>
        <p>{information}</p>
        <a href="https://www.aventuraafrica.com/safaris" className="see-more">See More</a>
        </div>
    );
    };

export default App;
