import React, { Component } from 'react';
import './App.css';
import Album from './components/album/Album';
import Appbar from './components/layout/Appbar'

class App extends Component {
  render() {
		return (
			<div className="App">
        <Appbar/>
        <Album/>
      </div>
    );
  }
}

export default App;