import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';

//import { SignupForm } from '../actions';

export function Signup(props) {
    if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
    }
    return (
            <div className="home">
                <h2>Register for Concert Monster</h2>
                <RegistrationForm />
                <Link to="/login">Login</Link>
            </div>
    );    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);
