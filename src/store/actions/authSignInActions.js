
export const signin = (User) => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(User.email,User.password).then((u) => {

        }).then(()=> {
            dispatch({type: 'SIGNIN_SUCCESS'})
        }).catch((error) => {
            dispatch({type: 'SIGNIN_ERROR',error})
        })
    }
}