export const signout = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
        }).then(()=> {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        }).catch((error) => {
            dispatch({type: 'SIGNOUT_ERROR',error})
        })
    }
}