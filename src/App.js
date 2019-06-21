import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Header from './components/header';

export class App extends React.Component {
    render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Header />
                  <Route exact path="/" component={Signup} />
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/dashboard" component={Dashboard}/>
              </div>
          </BrowserRouter>
      );
    }
}

const mapStateToProps = state => ({
    userId: state.userId
});

export default connect(mapStateToProps)(App);


//
//onSubmit()
//
//// send ot the server
//
//this.props.history.push('/dashboard');
