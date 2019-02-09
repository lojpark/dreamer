const initState = {
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'VOTE_INC_SUCCESS':
            console.log('vote inc', action.post)
            return {
                ...state,
                userResult: 'vote increase success'
            }
        case 'VOTE_INC_FAIL':
            console.log('vote inc error', action.error)
            return {
                ...state,
                userResult: 'vote increase fail'
            }
        case 'DONATE_INC_SUCCESS':
            console.log('donate inc', action.post)
            return {
                ...state,
                userResult: 'donate increase success'
            }
        case 'DONATE_INC_FAIL':
            console.log('donate inc error', action.error)
            return {
                ...state,
                userResult: 'cheer increase fail'
            }
        case 'COIN_INC_SUCCESS':
            console.log('coin inc', action.post)
            return {
                ...state,
                userResult: 'coin increase success'
            }
        case 'COIN_INC_FAIL':
            console.log('coin inc error', action.error)
            return {
                ...state,
                userResult: 'coin increase fail'
            }
        case 'ALREADY_VOTED':
            console.log('already voted', action.post)
            return {
                ...state,
                userResult: 'already voted'
            }
        default:
            return state;
    }
}

export default voteReducer