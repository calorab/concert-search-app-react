import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import store from '../store';

import LoginForm from './login-form';

export default function Login(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
console.log(store.getState());

    return (
        <div className="home">
            <h2>Welcome to Concert Monster</h2>
            <LoginForm />
            <Link to="/">Register</Link>
        </div>
    );
}


// export default class Login extends React.Component {

//     onSubmit(event){
//         event.preventDefault();
//         this.props.history.push('/dashboard');
//     }

//     render(){

//         return (
//             <div className="page" id="loginPage">
//                 <form className="form" onSubmit={event => this.onSubmit(event)}>
//                     <legend>Login Below</legend>
//                     <fieldset>
//                         <label for="loginEmail">Email</label><br />
//                         <input name="userEmail" type="email" id="loginEmail" required></input>
//                         <br />
//                         <label></label><br />
//                         <input name="userPassword" type="password" id="loginPassword" required></input>
//                     </fieldset>
//                     <button type="submit" className="submitButton" id="LoginButton">Login</button>
//                 </form>
//             </div>
//         );
//     }
// }

//export default connect ()(Login);
