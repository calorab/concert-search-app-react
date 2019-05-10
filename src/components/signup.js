import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Login from './login';

//import { SignupForm } from '../actions';

export function Signup(props) {
    if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
    }
    return (
        <Router>
            <div className="home">
                <h2>Register for Foo App</h2>
                <RegistrationForm />
                <Link to="/">Login</Link>
            </div>
        </Router>
    );    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);
