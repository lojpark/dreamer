import { combineReducers } from 'redux'
import albumReducer from './albumReducer'
import authReducer from './authReducer'
import postReducer from './postReducer'
import profileReducer from './authReducer'

const rootReducer = combineReducers({
    album: albumReducer,
    auth: authReducer,
    post: postReducer,
})

export default rootReducer;