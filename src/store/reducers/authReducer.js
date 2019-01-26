const initState = {
    authSuccess: null,
    authError: null
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
        default:
            return state;
    }
}

export default authReducer;