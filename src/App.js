import React, { Component }from 'react';
import './App.css';
import Header from './components/Header';
import Tours from './components/Tours';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header/>
        <Tours />
      </div>
    )
  }
}
export default App

