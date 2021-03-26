import logo from './logo.svg';
import './App.css';
import './Greetings'
import {Greetings} from './Greetings'; // after using named export we need to use {}
import {PeopleList} from './PeopleList';
import {CounterButton} from './CounterButton';
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

  return (
    <div className="App">
      <header className="App-header">
          <CounterButton/>
      </header>
    </div>
  );
}

export default App;
