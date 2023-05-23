import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../src/styles/calendar.css";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="my-calendar">
            <h2>Travel date</h2>
            <Calendar value={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default App;
