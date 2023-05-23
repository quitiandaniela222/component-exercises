import React from 'react';
import "../src/styles/img.css";

const Card = ({ imageZebra = "https://caracol.com.co/resizer/aVA-p7FoqokaepV1jrEDRbVq-Zc=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/4JCMDMB3WNBCLAQ4ALH54YM3HI.jpg",
image2="https://www.nationalgeographic.com.es/medio/2022/06/03/istock-120745851-1_60c7e805_800x800.jpg",
image3="https://www.zoobotanicojerez.com/fileadmin/_migrated/pics/LIOEPARDA_72.jpg" }) => {
    return (
        <div className="card">
            <img src={imageZebra} alt="Safari Image" className="card-image" />
            <img src={image2} alt="Safari Image" className="card-image" />
            <img src={image3} alt="Safari Image" className="card-image" />
        </div>
    );
};

export default Card;