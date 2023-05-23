import React, { useState } from 'react';
import "../src/styles/slider.css";
const App = () => {
    const images = [
        'https://images.ctfassets.net/wds1hqrprqxb/5a3H4dP2QXLStNIMOkHeYD/e242b2f4201f92244e0de68d279fc5e7/Bed.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/78YKTjSwNItNxp4KslHHYG/f32a67bade6456a0608e9a9dfb94d967/homepage_grid_lebombo.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/1Lzoor1yQyE39EITWk28mZ/a8011017d0be4f3c20eed60d9fef0bf3/PV_grid_lebombo.jpg?w=930&h=1200&q=85&fm=webp',
        'https://images.ctfassets.net/wds1hqrprqxb/5Ihf8bxX7e46fd0lLNcd0h/0abbaf7e94ffc6378ea3f26439759aa7/home_grid_Boulders.jpg?w=930&h=1200&q=85&fm=webp',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const handleBack = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="slider">
            <img src={images[currentImage]} alt="Slider Image" className="slider-image" />
            <div className="slider-buttons">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default App;