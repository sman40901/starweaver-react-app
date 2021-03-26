import logo from './logo.svg';
import './App.css';
import './Greetings'
import {Greetings} from './Greetings'; // after using named export we need to use {}
import {PeopleList} from './PeopleList';
//import {PeopleListItem} from './PeopleListItem'


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



  const adjective = 'cool';
  const url = "https://reactjs.org";

  const displayAlert =() =>{
    alert ('you call');
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greetings name="Shaun" numberOfMessages={0}> 
        <button onClick={displayAlert}>Click Me!</button>
        </Greetings>
        <PeopleList people={{people}}>

        </PeopleList>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is so {adjective} !!! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
