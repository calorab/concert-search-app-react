import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './login';
//import { connect } from 'react-redux';

//import { SignupForm } from '../actions';

export default class Signup extends React.Component {
    render(){
        return (
            <Router>
                <div className="page" id="signupPage">
                    <form className="form">
                        <legend>Sign-up Below</legend>
                        <fieldset>
                            <label for="signupEmail">Email</label><br />
                            <input name="newUserEmail" type="email" id="signupEmail" required></input>
                            <br />
                            <label>Password</label><br />
                            <input name="newUserPassword" type="password" id="signupPassword" required></input>
                        </fieldset>
                        <button type="submit" className="submitButton" id="signupButton">Login</button>
                    </form>
                    <Link to="/login">Need to Login Instead?</Link>
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

//export default connect ()(Signup);
