import React from 'react';
import "../src/styles/introduction.css";

const App = ({ title="◦SAFARIS IN AFRICA◦", caption="Delicate saffron-scented sunrises, world-class fauna, and endless paths of comfort.", 
information="Fortunately, synonymous with the authentic luxury safari in East Africa.",
description=" Our select safaris offer privileged views, expert guidance and the opportunity to truly walk among the most prestigious elephants, leopards, lions, buffaloes and rhinos. And it is that, to travel to Africa is to go back in time to a magical time, where the lion is still the king of the jungle, the gorillas dominate the tops of the mountains and the snows of Kilimanjaro remain insensitive to the passing of the Ages." }) => {
    return (
        <div className="safari-container">
        <h2>{title}</h2>
        <p>{caption}</p>
        <p>{information}</p>
        <p>{description}</p>
        <a href="https://www.aventuraafrica.com/safaris" className="see-more">See More</a>
        </div>
    );
    };

export default App;
