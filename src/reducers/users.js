import {
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    LOGIN_ERROR
} from '../actions/users';

const initialState = {
    loggedIn: false, 
    loading: false,
    error: null
};

export default function userReducer(state = initialState, action) {
    if (action.type === LOGIN_SUCCESS) {
        return Object.assign({}, state, {
            loggedIn: true,
            loading: false
        });
    } else if (action.type === LOGIN_LOADING) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === LOGIN_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}