import logo from './logo.svg';
import './App.css';


function App() {
  const isMorning = (new Date()).getHours() < 12;
  const greetingElement = isMorning ? <h3>Good morning</h3> : <h3>Good evening</h3>;

  const adjective = 'cool';
  const url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        {greetingElement}
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
