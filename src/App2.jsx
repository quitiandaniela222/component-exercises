import React from 'react';
import "../src/styles/menu.css";

const App = ({title, imageUrl="https://static.wixstatic.com/media/aca966_1302c6980c8c4185a40b461096316ff7~mv2.png/v1/crop/x_42,y_8,w_1185,h_460/fill/w_548,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bush%20Explorations%20Africa%20Logo%20green.png"}) => {
    return (
        <div>
            <ul className="Menu">
                <li>
                    <a>
                    <img
                            src={imageUrl}
                            alt={title}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.aventuraafrica.com/">START</a>
                </li>
                <li>
                    <a href="https://www.aventuraafrica.com/viajes">TRIPS</a>
                </li>
                <li>
                    <a href="https://www.aventuraafrica.com/por-que-con-nosotros">WHY WE?</a>
                </li>
                <li>
                    <a href="https://www.aventuraafrica.com/testimonios">TESTIMONIALS</a>
                </li>
            </ul>
            <div className="Image">
                <img
                    src="https://www.aventuraafrica.com/application/files/live/2516/0647/4253/safari-en-africa.jpg" alt="Safari Image"
                />
            </div>
        </div>
    );
};

export default App;