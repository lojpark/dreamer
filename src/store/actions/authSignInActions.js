
export const signin = (User) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            User.email,
            User.password)
            .then(() => {
                dispatch({ type: 'SIGNIN_SUCCESS' });
            }).catch((error) => {
            dispatch({ type: 'SIGNIN_ERROR', error });
        });
    }
};