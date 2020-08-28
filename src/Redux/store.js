import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import dog from "./dogReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
    dog, 
    user
})
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));