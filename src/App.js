import logo from './logo.svg';
import './App.css';
import './Greetings'
import Greetings from './Greetings';


function App() {


  const adjective = 'cool';
  const url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        <Greetings></Greetings>
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
