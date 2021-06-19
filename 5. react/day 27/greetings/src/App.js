import logo from './logo.svg';
import './App.css';
import Hallo from './hallo';
import BelajarState from './BelajarState';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Hallo name="arifin" age={30}>
          <p>world</p>
        </Hallo> */}
        <BelajarState></BelajarState>
        <Greeting></Greeting>
      </header>
    </div>
  );
}

export default App;
