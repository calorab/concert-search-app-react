import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import concertMonsterReducer from './reducers/concert-monster';
import authorizeReducer from './reducers/authorize';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authorizeReducer,
        main: concertMonsterReducer
    }),
    applyMiddleware(thunk)
);

// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;

