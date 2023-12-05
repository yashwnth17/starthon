import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'; // Check case sensitivity here
import Welcome from './components/welcome';



class App extends Component { // Corrected component name to start with an uppercase letter
  render() {
    return (
      <div className="App">
        <Greet /> {/* Use Greet as a JSX element */}
        <Welcome />
        
      </div>
    );
  }
}

export default App;
