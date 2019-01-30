const initState = {
    authSuccess: null,
    authError: null,
    authSignInSuccess: null,
    authSignInError: null
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
                authSignInSuccess: true,
                authSignInError: null
            }
        case 'SIGNIN_ERROR':
            console.log('sign in error',action.error.message);
            return {
                ...state,
                authSignInSuccess: false,
                authSignInError: action.error.message
             
            }
        case 'SIGN_OUT':
            console.log('sign out');
            return {
                ...state,
                ...state,
                authSignInSuccess: null,
                authSignInError:null
            }
        default:
            return state;
    }
}

export default authReducer;
