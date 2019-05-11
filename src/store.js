import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {concertMonsterReducer} from './reducers/concert-monster';
import {authorizingReducer} from './reducers/authorize';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authorizingReducer,
        main: concertMonsterReducer
    }),
    applyMiddleware(thunk)
);

export default store;

