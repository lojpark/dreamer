import React, { Component } from 'react';
import './App.css';
import Album from './Album';
import Register from './Register';

class App extends Component {
  render() {
		return (
			<div className="App">
        <Register/>
      </div>
    );
  }
}

export default App;