import React, { Component } from 'react';
import './App.css';
import Album from './Album';

class App extends Component {
  render() {
		return (
			<div className="App">
        <Album></Album>
      </div>
    );
  }
}

export default App;