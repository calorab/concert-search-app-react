import React from 'react';

import './App.css';

import Login from './components/login';
import Signup from './components/signup';
//import Dashboard from './components/dashboard';

class App extends React.Component {

    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <p className="bannerTitle">ConcertMonster</p>
              </header>
              <Login onClick={()=> this.setEditing(true)}/>
              <Signup onClick={()=> this.setEditing(true)}/>
          </div>
      );
    }
}

export default App;
