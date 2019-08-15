import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import store from '../store';


import LoginForm from './login-form';

function Login(props) {
    // If we are logged in redirect straight to the user's dashboard 
    //---- CALEB debug this as loggedIn is true after loginSuccess but no Redirect
    console.log(props);
    if (props.loggedIn === true) {

        console.log("Login line 12");
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Welcome to Concert Monster</h2>
            <LoginForm />
            <Link to="/">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Login);




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
