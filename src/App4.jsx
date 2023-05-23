import React from 'react';
import "../src/styles/select.css";

const cities = [
    { label: 'Botsuana', link: 'https://www.aventuraafrica.com/paises/Botsuana' },
    { label: 'Namibia', link: 'https://www.lonelyplanet.es/blog/destino-de-la-semana-windhoek-la-cosmopolita-capital-de-namibia' },
    { label: 'Zambia', link: 'https://www.exteriores.gob.es/documents/fichaspais/zambia_ficha%20pais.pdf' },
    { label: 'Sudáfrica', link: 'https://www.aventuraafrica.com/paises/sudafrica' },
    { label: 'Kenia', link: 'https://www.nationalgeographic.es/viaje-y-aventuras/kenia-0' },
    { label: 'Mozambique', link: 'https://www.exteriores.gob.es/documents/fichaspais/mozambique_ficha%20pais.pdf' },
    { label: 'Tanzania', link: 'https://tanzaniaspecialist.es/parques-nacionales/serengueti/' },
    { label: 'Ruanda', link: 'https://www.exteriores.gob.es/documents/fichaspais/ruanda_ficha%20pais.pdf' },
];

const CityButton = ({ label, link }) => (
    <a href={link} className="city-button">
        {label}
    </a>
);

const App = () => (
    <div className="city-container">
        <h2>Select your favorite destinations for your safari in Africa</h2>
        <div className="city-buttons">
            {cities.map((city, index) => (
                <CityButton key={index} label={city.label} link={city.link} />
            ))}
        </div>
    </div>
);

export default App;

