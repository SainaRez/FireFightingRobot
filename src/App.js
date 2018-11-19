import React, { Component } from 'react';
import Map from './Map/Map';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LeftBar />
      <RightBar />
      </div>
    );
  }
}

export default App;
