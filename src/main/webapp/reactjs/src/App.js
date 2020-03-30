import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
    <h1> Hello Index </h1>

    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
    </div>
//    <div className="App">
//      <header className="App-header">
////        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Hello index
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
  );
}

export default App;
