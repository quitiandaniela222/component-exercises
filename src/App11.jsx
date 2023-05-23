import React, { useState } from 'react';
import "../src/styles/cities.css";
const App = () => {
    const images = [
        'https://images.ctfassets.net/wds1hqrprqxb/38J2SD0Y15zGboTOrump9J/9e339850df0e1c90b67015b4c8165cfe/homepage_grid_sasakwa.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/2RY0vXTvVwo9SzbOkIuqPb/9d4051d778ba5583e8e6b7705ae88ede/Singita-Faru-Faru-Lodge10.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/mthLNTKVz0SQdKPhSxHyN/e6189ea3920c570002d9efb2079daf25/home_grid_sabora.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/2lUhyl5KXJImrZLwyt9yeR/16a9e5aff85f30e66176b8ec37631b40/home_grid_pamushana.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/2Jguu5Y5xwAF4NOQl8BYg7/65433b86cb236f2a231c2c25eecdb380/homepage_grid_kwitonda.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/5ZXOfOSGQgtjzLtWWzzwrn/e9b0aec2321fcb96adc42dba0164691c/home_grid_serengeti_house.jpg?w=930&h=1200&q=85&fm=webp'
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const handleAfter = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="slider">
            <img src={images[currentImage]} alt="Slider Image" className="slider-image" />
            <div className="slider-buttons">
                <button onClick={handleAfter}>After</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default App;