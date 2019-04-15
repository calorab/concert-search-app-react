import React from 'react';

//import { connect } from 'react-redux';

//import { SignupForm } from '../actions';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className='homeButton' onClick={()=> this.setEditing(true)}>New user? Click here...</div>
            );
        }

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
                    <button type="button" className="submitButton" id="cancelSignupButton" onClick={() => this.setEditing(false)}>Cancel</button>
                </form>
            </div>
        );
    }
}

//export default connect ()(Signup);
