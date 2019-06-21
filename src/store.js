import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import concertMonsterReducer from './reducers/concert-monster';


//CALEB - Do I need a users reducer here?
const store = createStore(
    combineReducers({
        form: formReducer,
        main: concertMonsterReducer
    }),
    applyMiddleware(thunk)
);

export default store;

