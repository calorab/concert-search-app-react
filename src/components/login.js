import React from 'react';
import './login.css';

//import { connect } from 'react-redux';

//import { loginForm } from '../actions';

export class Login extends React.Component {
    render() {
        return (
            <div class="page" id="loginPage">
                <form>
                    <legend>Login Below</legend>
                    <fieldset>
                        <label for="loginEmail">Email</label>br>
                        <input name="userEmail" type="email" id="loginEmail" required></input>
                        <br>
                        <label></label>br>
                        <input name="userPassword" type="password" id="loginPassword" required></input>
                    </fieldset>
                    <button type="submit" className="submitButton" id="LoginButton">Login</button>
                </form>
            </div>
        );
    }
}

export default connect ()(Login);
