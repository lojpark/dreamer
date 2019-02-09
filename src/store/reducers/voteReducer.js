const initState = {
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'VOTE_INC_SUCCESS':
            console.log('vote inc', action.post)
            return state;
        case 'VOTE_INC_FAIL':
            console.log('vote inc error', action.error)
            return state;
        default:
            return state;
    }
}

export default voteReducer