import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import UserReducer from './users'
import Thunk from 'redux-thunk'

const RootReducer = combineReducers({
    UserReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(Thunk)))