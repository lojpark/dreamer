import {applyMiddleware as dispatch} from "redux";

const initState = {
    authSuccess: null,
    authError: null,
    authSignInSuccess: null,
    authSignInError: null,

    firstName : null,
    lastName : null,

    cardNumber : null,
    cardName : null,
    cvv : null,
    expDate : null,
}

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

            if (typeof action.profile_info.card === 'undefined') {
                return {
                    ...state,
                    authSignInSuccess: true,
                    authSignInError: null,
                    firstName : action.profile_info.firstName,
                    lastName : action.profile_info.lastName,
                }
            }
            else {
                return {
                    ...state,
                    authSignInSuccess: true,
                    authSignInError: null,
                    firstName : action.profile_info.firstName,
                    lastName : action.profile_info.lastName,
                    cardName : action.profile_info.card.cardName,
                    cardNumber : action.profile_info.card.cardNumber,
                    cvv : action.profile_info.card.cvv,
                    expDate : action.profile_info.card.expDate
                }
            }

        case 'SIGNIN_ERROR':
            console.log('sign in error',action.error.message);
            return {
                ...state,
                authSignInSuccess: false,
                authSignInError: action.error.message,

            }
        case 'SIGNOUT_SUCCESS':
             console.log('sign out success');
             return {
                 ...state,
                 ...state,
                 authSignInSuccess: null,
                 authSignInError:null
             }
         case 'SIGNOUT_ERROR':
             console.log('sign out error',action.error.message);
             return {
                 ...state,
                 ...state,
                 authSignInSuccess: null,
                 authSignInError:action.error.message
             }
        default:
            return state;
    }
}

export default authReducer;
