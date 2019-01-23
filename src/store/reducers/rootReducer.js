import { combineReducers } from 'redux'
import albumReducer from './albumReducer'

const rootReducer = combineReducers({
    album: albumReducer,
})

export default rootReducer;