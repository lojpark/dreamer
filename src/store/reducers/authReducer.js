
const initState = {
    authSuccess: null,
    authError: null,

    authSignInSuccess: null,
    authSignInError: null,

    firstName : null,
    lastName : null,

    paymentSuccess : null,
    authPaymentError : null,
    cardNumber : null,
    cardName : null,
    cvv : null,
    expDate : null,

    uid : null
}

const authReducer = (state = initState, action) => {
     switch (action.type) {
         case 'REGISTER_SUCCESS':
             console.log('register success');
             return {
                 ...state,
                 authSuccess: true,
                 authError: null,
                 uid: action.uid

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
                 authSignInSuccess: true,
                 authSignInError: null,
                 firstName: action.profile_info.firstName,
                 lastName: action.profile_info.lastName,
                 uid: action.uid,
             }



        case 'SIGNIN_ERROR':
            console.log('sign in error',action.error.message);
            return {
                ...state,
                paymentSuccess : null,
                authSignInSuccess: false,
                authSignInError: action.error.message,
            }
        case 'SIGNOUT_SUCCESS':
             console.log('sign out success');
             return {
                 ...state,
                 authSignInSuccess: null,
                 authSignInError:null,
                 firstName : null,
                 lastName : null,
                 cardNumber : null,
                 cardName : null,
                 cvv : null,
                 expDate : null,
                 uid : null
             };
         case 'SIGNOUT_ERROR':
             console.log('sign out error',action.error.message);
             return {
                 ...state,
                 authSignInSuccess: null,
                 authSignInError:action.error.message,
             };
         case 'PAYMENT_SUCCESS':
             return {
                 ...state,
                 paymentSuccess : true,
                 authSuccess : null,
                 cardName : action.payment_info.cardName,
                 cardNumber : action.payment_info.cardNumber,
                 cvv : action.payment_info.cvv,
                 expDate : action.payment_info.expDate,
             };
         case 'PAYMENT_ERROR' :
             console.log(action.error.message);
        default:
            return state;
    }
}

export default authReducer;
