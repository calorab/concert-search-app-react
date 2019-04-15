import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {concertSearchReducer} from './reducer';

export default createStore(concertSearchReducer);
