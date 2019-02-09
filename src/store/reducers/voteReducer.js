const initState = {
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'VOTE_INC_SUCCESS':
            console.log('vote inc', action.post)
            return {
                ...state,
                userResult: 'user update success'
            }
        case 'VOTE_INC_FAIL':
            console.log('vote inc error', action.error)
            return {
                ...state,
                userResult: 'user update success'
            }
        case 'ALREADY_VOTED':
            console.log('already voted', action.post)
            return {
                ...state,
                userResult: 'user update success'
            }
        default:
            return state;
    }
}

export default voteReducer