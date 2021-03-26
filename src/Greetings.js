import React from 'react';

export const Greetings = (props) => // named export, forces us to use same name across the file
// using arrow function
{
    console.log(props);
    const isMorning = (new Date()).getHours() < 12;
    const greetingHeader = isMorning ? ( 
          <h3>Good morning {props.name}</h3> 
        )
        : <h3>Good evening {props.name}</h3>;
    return ( //react fragments <></>
    <> 
        {greetingHeader}
        <p> some new line {props.numberOfMessages}</p>
    </>
        ) ; 
}

//export default Greetings; 
// disadvantage is we can rename this at our will, it might be a typo and react wont complain