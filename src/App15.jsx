import React from 'react';
import "../src/styles/img.css";

const Card = ({ imageZebra = "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2788866.jpg?w=1600",
image2="https://images.ctfassets.net/wds1hqrprqxb/6vA2IXHnzWZssWQHtP5knR/ca9e39645a2c8e0540d05b85110ac1bb/SS_WILDLIFE_Giraffe_Ross_Couper_127.jpg?w=930&h=1000&q=95&fm=webp",
image3="https://images.ctfassets.net/wds1hqrprqxb/1I9U5c4DoC1wA7Kpjyqc3l/b834c02f6eafc7484bcf3f1825caf980/intro-img.jpg?w=930&h=1000&q=95&fm=webp" }) => {
    return (
        <div className="card">
            <img src={imageZebra} alt="Safari Image" className="card-image" />
            <img src={image2} alt="Safari Image" className="card-image" />
            <img src={image3} alt="Safari Image" className="card-image" />
        </div>
    );
};

export default Card;

