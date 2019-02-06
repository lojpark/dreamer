import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import profileReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firestore: firestoreReducer
})

export default rootReducer;