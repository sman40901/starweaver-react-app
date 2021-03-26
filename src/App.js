import logo from './logo.svg';
import './App.css';
import './Greetings'
import {Greetings} from './Greetings'; // after using named export we need to use {}


function App() {


  const adjective = 'cool';
  const url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        <Greetings name="Shaun" numberOfMessages={5}></Greetings>
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
