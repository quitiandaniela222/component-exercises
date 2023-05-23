import React from 'react';

const App = ({ text = "The rich tribal history of the region is the inspiration for the design of Singita Pamushana Lodge, drawing on the proud heritage of ancient Zimbabwe. Perched atop a sandstone ridge overlooking the shimmering expanse of the Malilangwe Dam, the lodge is a celebration of its incredible wilderness setting." }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop:"4%" }}>
            <div>
                <iframe
                    src="https://player.vimeo.com/video/293541177?h=753b4f43e9"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    width="650"
                    height="360"
                    frameBorder="0"
                ></iframe>
            </div>
            <p style={{ textAlign: 'center' }}>{text}</p>
        </div>
    );
};

export default App;