import { combineReducers } from 'redux'
import albumReducer from './albumReducer'
import authReducer from './authReducer'
import profileReducer from './authReducer'

const rootReducer = combineReducers({
    album: albumReducer,
    auth: authReducer,
})

export default rootReducer;