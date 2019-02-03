
export const register = (newUser) => {
    var uid ;
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        if(newUser.password !== newUser.pass_chk){
            dispatch({ type: 'NOT_SAME'})
        }else{
            const firebase = getFirebase();
            const firestore = getFirestore();
            firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then((response) => {
                uid = response.user.uid;
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,

                })
            }).then(() => {
                dispatch({ type: 'REGISTER_SUCCESS',uid})
            }).catch(error => {
                dispatch({ type: 'REGISTER_ERROR', error })
        })}
    }
}