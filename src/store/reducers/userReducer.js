const initState = {
    userResult: null,
    imageUploadResult: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                userResult: 'user update success'
            }

        case 'USER_UPDATE_FAIL':
            return {
                ...state,
                userResult: action.err.message
            }

        case 'PAYMENT_UPDATE_SUCCESS':
            return {
                ...state,
                userResult: 'payment update success'
            }

        case 'PAYMENT_UPDATE_FAIL':
            return {
                ...state,
                userResult: action.err.message
            }

        case 'BUY_COIN_SUCCESS':
            return {
                ...state,
                userResult: 'coin bought. you now have ' + action.coin + ' coins',
            }
        case 'BUY_COIN_FAIL':
            return {
                ...state,
                userResult: action.err.message
            }

        case 'RESET_USER_RESULT':
            return {
                ...state,
                userResult: null,
            }

        case 'USER_CAREER_ADD_SUCCESS':
            return state;

        case 'USER_CAREER_ADD_FAIL':
            return {
                ...state,
                userResult: action.err.message,
            }

        case 'USER_CAREER_REMOVE_SUCCESS':
            return state;

        case 'USER_CAREER_REMOVE_FAIL':
            console.log(action.err.message);
            return {
                ...state,
                userResult: action.err.message
            }
        case 'PROFILE_UPDATE_SUCCESS':
            return {
                ...state,
                imageUploadResult: 'done',
            };

        case 'PROFILE_UPDATE_FAIL':
            console.log(action.err.message);
            return {
                ...state,
                userResult: action.err.message,
                imageUploadResult: 'done',
            }
        default:
            return state;
    }
}

export default userReducer