import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import profileReducer from './authReducer'
import userReducer from './userReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;