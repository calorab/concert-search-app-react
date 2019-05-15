import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Welcome to Foo App</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

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
