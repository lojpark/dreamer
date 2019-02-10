const initState = {
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'VOTE_INC_SUCCESS':
            console.log('vote inc')
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
            console.log('donate inc')
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
            console.log('coin inc')
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
            console.log('already voted')
            return {
                ...state,
                userResult: 'already voted'
            }
        case 'DONATE_MYSELF':
            console.log('donate myself')
            return {
                ...state,
                userResult: 'donate myself'
            }
        default:
            return state;
    }
}

export default voteReducer