import React, {useState} from 'react';

// {useState} -> hooks
// const arr = [1,2,3];
// const [x,y,z] = arr;

export const CounterButton = () => //(props) => // named export, forces us to use same name across the file
// using arrow function
{
    // state var numberOfClicks, setNumberOfClicks is the function to set that state
    const [numberOfClicks, setNumberOfClicks] = useState(0); // using array destructuring syntax, 

    const increment = () =>{
        setNumberOfClicks(numberOfClicks + 1);
    }

    // below code does not work because
    // only react re-renders the components when   
    // only props value changes or state value changes thru hooks, 
    // let numberOfClicks = 0;

    // const increment = () =>{
    //     numberOfClicks += 1;
    // }
   
 

    return(
    <>
    <p>You've clicked {numberOfClicks} times</p>
    <button onClick={increment}>Click me!</button>
    </>
    )
}