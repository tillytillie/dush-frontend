import react from react 



return (
    <div>
        <Header />
        <h1>User Reg</h1>
        <inout type="text" placeholder="email" />
        <inout type="password" placeholder="password" />
        

    </div>
)
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
        <h1>User Reg</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />   
    </div>


        <a
          className="App-link"
          href="https://reactjs.org"
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

export default registration
