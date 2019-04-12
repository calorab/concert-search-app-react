import React from 'react';

//import { connect } from 'react-redux';

//import { loginForm } from '../actions';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false
        }
    }



    setEditing() {
        this.setState({
            editing: true
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className='homeButton'onClick={()=> this.setEditing(true)}>Returning user? Click here...</div>
            );
        }

        return (
            <div className="page" id="loginPage">
                <form className="form">
                    <legend>Login Below</legend>
                    <fieldset>
                        <label for="loginEmail">Email</label><br />
                        <input name="userEmail" type="email" id="loginEmail" required></input>
                        <br />
                        <label></label><br />
                        <input name="userPassword" type="password" id="loginPassword" required></input>
                    </fieldset>
                    <button type="submit" className="submitButton" id="LoginButton">Login</button>
                </form>
            </div>
        );
    }
}

//export default connect ()(Login);
