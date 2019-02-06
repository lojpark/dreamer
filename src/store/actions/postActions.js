export const createPost = (post) => {
    return (dispatch, getState) => {
        // make async call to database
        console.log(post);
        dispatch({ type: 'CREATE_POST', post })
    }
}