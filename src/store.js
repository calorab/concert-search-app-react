import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import {loadAuthToken} from './local-storage';
import {reducer as authorizeReducer} from './reducers/authorize';
import concertMonsterReducer from './reducers/concert-monster';
import {setAuthToken, refreshAuthToken} from './actions/authorize';


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authorizeReducer,
        main: concertMonsterReducer
    }),
    applyMiddleware(thunk)
);

if (setAuthToken.authToken) {
    const token = setAuthToken.authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;

