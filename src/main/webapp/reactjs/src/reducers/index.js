import counterReducer from './counter';
import loggedReducer from './isLogged';
import loginTokenReducer from './loginToken';
import loginIdentityReducer from './loginIdentity';
import  { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer,
    loginIdentityReducer,
    loginTokenReducer
})

export default allReducers;