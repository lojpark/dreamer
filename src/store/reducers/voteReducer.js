const initState = {
    result: null,
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'VOTE_INC_SUCCESS':
            console.log('vote inc')
            return {
                ...state,
                result: 'vote increase success'
            }
        case 'VOTE_INC_FAIL':
            console.log('vote inc error', action.error)
            return {
                ...state,
                result: 'vote increase fail'
            }
        case 'DONATE_INC_SUCCESS':
            console.log('donate inc')
            return {
                ...state,
                result: 'donate increase success'
            }
        case 'DONATE_INC_FAIL':
            console.log('donate inc error', action.error)
            return {
                ...state,
                result: 'cheer increase fail'
            }
        case 'COIN_INC_SUCCESS':
            console.log('coin inc')
            return {
                ...state,
                result: 'coin increase success'
            }
        case 'COIN_INC_FAIL':
            console.log('coin inc error', action.error)
            return {
                ...state,
                result: 'coin increase fail'
            }
        case 'ALREADY_VOTED':
            console.log('already voted')
            return {
                ...state,
                result: 'already voted'
            }
        case 'DONATE_MYSELF':
            console.log('donate myself')
            return {
                ...state,
                result: 'donate myself'
            }
        case 'REQUIRE_MORE_COIN':
            console.log('require more coin')
            return {
                ...state,
                result: 'require more coin'
            }
        case 'RESET_VOTE_RESULT':
            return {
                ...state,
                result: null
            }
        default:
            return state;
    }
}

export default voteReducer