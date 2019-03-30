import React, { Component } from 'react';

import './App.css';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p className="bannerTitle">ConcertMonster</p>
        </header>
        <Login />
        <Signup />
        <Dashboard />
      </div>
    );
  }
}

export default App;
