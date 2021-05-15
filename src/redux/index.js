import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import UserReducer from './users'
import Thunk from 'redux-thunk'
import { GetUsers } from '../api/users'
import { SetUsers } from './users'

const RootReducer = combineReducers({
    UserReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(Thunk)))

GetUsers().then(response => store.dispatch(SetUsers(response.data))).catch(error => console.log(error.message));