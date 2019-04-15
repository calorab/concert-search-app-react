import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/login';
import Signup from './components/signup';
//import Dashboard from './components/dashboard';

class App extends React.Component {

    render() {
      return (
          <Router>
              <div className="App">
                  <header className="App-header">
                      <h1><Link to="/">ConcertMonster</Link></h1>
                  </header>
                  <Route exact path="/" component={Signup} />
                  <Route path="/login" component={Login}/>
              </div>
          </Router>
      );
    }
}

export default App;


//<Link to="/login">Login</Link>
//onSubmit()
//
//// send ot the server
//
//this.props.history.push('/dashboard');
