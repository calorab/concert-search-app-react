import React from 'react';
import {Link} from 'react-router-dom';
import RegistrationForm from './registration-form';

export default function Signup(props) {
    return (
            <div className="home">
                <h2>Register for Concert Monster</h2>
                <RegistrationForm />
                <Link to="/login">Login</Link>
            </div>
    );
}



