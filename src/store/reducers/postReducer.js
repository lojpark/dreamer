const initState = {
    posts: [
    ]
}

const postReducer = (state = initState, action) => {
    console.log(action.type, action.post)
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post)
            return state;
        case 'CREATE_POST_ERROR':
            console.log('create post error', action.error)
            return state;
        default:
            return state;
    }
}

export default postReducer