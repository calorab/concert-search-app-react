import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import concertMonsterReducer from './reducers/concert-monster';
import userReducer from './reducers/users';


const store = createStore(
    combineReducers({
        form: formReducer,
        artist: concertMonsterReducer,
        user: userReducer
    }),
    applyMiddleware(thunk)
);

export default store;

