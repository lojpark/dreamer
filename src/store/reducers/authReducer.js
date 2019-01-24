const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            console.log('register success');
            return {
                ...state,
                authError: null
            }
        case 'REGISTER_ERROR':
            console.log('register error');
            return {
                ...state,
                authError: action.error.message
            }
    }
}