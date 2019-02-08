import {applyMiddleware as dispatch} from "redux";

const initState = {
    authSuccess: null,
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            console.log('register success');
            return {
                ...state,
                authSuccess: true,
                authError: null
            }
        case 'NOT_SAME':
            console.log('confirm password');
            return {
                ...state,
                authSuccess: false,
                authError: "Confirm Password not equal"
            }
        case 'REGISTER_ERROR':
            console.log('register error', action.error.message);
            return {
                ...state,
                authSuccess: false,
                authError: action.error.message
            }

        case 'SIGNIN_SUCCESS':
            console.log('sign in success');
            return {
                ...state,
                authError: null,
            }

        case 'SIGNIN_ERROR':
            console.log('sign in error',action.error.message);
            return {
                ...state,
                authError: action.error.message,
            }

        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return {
                ...state,
                authError: null,
            }

        case 'SIGNOUT_ERROR':
            console.log('sign out error',action.error.message);
            return {
                ...state,
                authError: action.error.message,
            }

        default:
            return state;
    }
}

export default authReducer;
