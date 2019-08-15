import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';



export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (username, password) => ({
    type: LOGIN_SUCCESS,
});


export const LOGIN_LOADING = 'LOGIN_LOADING';
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = error => ({
    type: LOGIN_ERROR,
    error
});



export const registerUser = user => dispatch => {
    return(
        fetch(`${API_BASE_URL}/users/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
       })
    );
};
//CALEB - add back in history as prop
export const login = (username, password) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {dispatch(loginSuccess())})
        // .then(() => {
        //     console.log("hello");
        //     try {
        //         console.log(history);
        //         console.log(history.push);
        //         history.push('/dashboard');
        //     } catch (err){console.log(err)}    
        // })
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to login, please try again';
            // Could not authenticate, so return a SubmissionError for Redux Form
            dispatch(loginError(err))     
        })
    );
};

//CALEB - the below removed from line 79-83 bc of error - working through StackOF possible fix... although promises in utils too
// return Promise.reject(
//                 new SubmissionError({
//                     _error: message
//                 })
//             );