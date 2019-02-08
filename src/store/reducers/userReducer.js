const initState = {
    userResult: "",
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

        default:
            return state;
    }
}

export default userReducer