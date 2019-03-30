import React from 'react';
import './signup.css';

//import { connect } from 'react-redux';

//import { SignupForm } from '../actions';

export default class Signup extends React.Component {
    render() {
        return (
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
            </div>
        );
    }
}

//export default connect ()(Signup);
