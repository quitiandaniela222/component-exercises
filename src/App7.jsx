import React from 'react';

const App = ({ title = "Singita, the Shangaan word for 'Place of Miracles'",
    text = "With limited guest and vehicle numbers, exceptionally consistent game viewing and warm-hearted hospitality, guests leave feeling transformed with body and soul soothed by meaningful connections with loved ones, themselves and nature." }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop:"4%" }}>
            <div>
                <iframe
                    src="https://player.vimeo.com/video/387653322?h=3a0abaa5eb&autoplay=1&title=0&byline=0&portrait=0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    width="650"
                    height="360"
                    frameBorder="0"
                ></iframe>
            </div>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            <p style={{ textAlign: 'center' }}>{text}</p>
        </div>
    );
};

export default App;
