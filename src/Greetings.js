import React from 'react';

export const Greetings = () => // named export, forces us to use same name across the file
// using arrow function
{
    const isMorning = (new Date()).getHours() < 12;
    const greetingHeader = isMorning ? ( 
          <h3>Good morning</h3> 
        )
        : <h3>Good evening</h3>;
    return ( //react fragments <></>
    <> 
        {greetingHeader}
        <p> some new line</p>
    </>
        ) ; 
}

//export default Greetings; 
// disadvantage is we can rename this at our will, it might be a typo and react wont complain