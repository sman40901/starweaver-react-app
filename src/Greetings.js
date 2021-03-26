import React from 'react';

export function Greetings() // named export, forces us to use same name across the file
{
    const isMorning = (new Date()).getHours() < 12;
    return  isMorning ? ( //react fragments <></>
    <> 
        <h3>Good morning</h3> 
        <p> some new line</p>
    </>
    )
    : <h3>Good evening</h3>;
}

//export default Greetings; 
// disadvantage is we can rename this at our will, it might be a typo and react wont complain