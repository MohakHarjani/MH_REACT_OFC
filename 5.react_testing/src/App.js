import logo from './logo.svg';
import './App.css';
import TestingComponentBranching from './components/TestWithMockDataBranching';
const Data = [
  {
      "id": 1,
      "first_name": "Fletcher",
      "last_name": "McVanamy",
      "email": "mmcvanamy0@e-recht24.de",
      "age": 30
    }, {
      "id": 2,
      "first_name": "Clarice",
      "last_name": "Harrild",
      "email": "charrild1@dion.ne.jp",
      "age": 35
    }, 
    {
      "id": 3,
      "first_name": "Amby",
      "last_name": "Emmer",
      "email": "aemmer2@buzzfeed.com",
      "age": 67
  }
]

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
      </header>
      <TestingComponentBranching data={Data} displayUnorderedList={true} />
    </div>
  );
}

export default App;
