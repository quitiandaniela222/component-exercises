import React from 'react';

const PlayButton = ({ videoUrl="https://youtu.be/sfTaUGVvT6w"}) => {
    const playVideo = () => {
        window.open(videoUrl, '_blank');
    };

    return (
        <button
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                height: "50%",
                backgroundColor: "#f1c40f",
                color: "#333",
                border: "none",
                borderRadius: "5px",
                fontSize: "18px",
                cursor: "pointer",
                margin: "auto"
            }}
            onClick={playVideo}
        >
            PLAY
        </button>
    );
};

export default PlayButton;
