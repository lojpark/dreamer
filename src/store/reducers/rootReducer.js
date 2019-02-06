import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import profileReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
})

export default rootReducer;