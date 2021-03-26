import React from 'react';
import './App.css';
import './Greetings'
import {Greetings} from './Greetings'; // after using named export we need to use {}
import {PeopleList} from './PeopleList';

import {CounterButton} from './CounterButton';
import {CongratulationsMessage} from './CongratulationsMessage'
import {useState} from 'react';
//import {PeopleListItem} from './PeopleListItem'

// hoisting the state 


const people =[{
  name : 'Ho',
  age : 40,
  hair : 'brown'
},{
  name : 'John',
  age : 45,
  hair : 'black'
}];


function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0); // using array destructuring syntax, 

  const increment = () =>{
      setNumberOfClicks(numberOfClicks + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
          <CongratulationsMessage threshold={10} numberOfClicks={numberOfClicks}/>
          <CounterButton numberOfClicks={numberOfClicks} increment={increment}/>
      </header>
    </div>
  );
}

export default App;
