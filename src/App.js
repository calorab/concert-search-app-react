import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
//import Dashboard from './components/dashboard';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    render() {
      return (
          <Router>
              <div className="App">
                  <header className="App-header">
                      <h1><Link to="/">ConcertMonster</Link></h1>
                  </header>
                  <Route exact path="/" component={Login} />
                  <Route path="/signup" component={Signup}/>
                  <Route path="/dashboard" component={Dashboard}/>
              </div>
          </Router>
      );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));


//
//onSubmit()
//
//// send ot the server
//
//this.props.history.push('/dashboard');
