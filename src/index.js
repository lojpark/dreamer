import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebaseConfig from './config/firebaseConfig'

const theme = createMuiTheme({
    //override the theme here
    palette: {
        primary: {main: '#4497ec'
        }
    },
    typography: {
        useNextVariants: true,
    }
});

function saveToLocalStorage (state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }catch(e){
        console.log(e)
    }
};


function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state');
        if (serializedState ===null) return undefined;
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e);
        return undefined
    }
}

const persistState = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    persistState,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, { useFirestoreForProfile: true, userProfile: 'users' })
    )
);

store.subscribe(() => saveToLocalStorage(store.getState()));



ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}  >
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

