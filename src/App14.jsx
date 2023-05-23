import React from 'react';

const MapComponent = () => {
    const mapStyles = {
        width: '800px',
        height: '600px',
        border: '0',
        margin: '0 auto',
        display: 'block',
    };

    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659043.982291233!2d23.59146645!3d2.265532400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a06c0a948cf5d5%3A0x108270c99e90f0b3!2zw4FmcmljYQ!5e0!3m2!1ses!2sco!4v1684820063138!5m2!1ses!2sco"
                style={mapStyles}
            ></iframe>
        </div>
    );
};

export default MapComponent;
