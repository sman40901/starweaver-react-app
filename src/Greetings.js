import React from 'react';

function Greetings()
{
    const isMorning = (new Date()).getHours() < 12;
    return  isMorning ? <h3>Good morning</h3> : <h3>Good evening</h3>;
}

export default Greetings;