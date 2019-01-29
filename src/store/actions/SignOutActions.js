export const signout = () => {
    return (dispatch) => {
            dispatch({type: 'SIGN_OUT'})
    }
}