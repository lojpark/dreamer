
export const changePayment = (UserPayment) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
            firestore.collection('users').doc(firebase.auth().currentUser.uid).set({
            card: {
                cardName: UserPayment.cardName,
                cardNumber : UserPayment.cardNumber,
                expDate : UserPayment.expDate,
                cvv : UserPayment.cvv
            }
        },{merge:true}).then(() => {
            dispatch({type: 'PAYMENT_SUCCESS'});
        }).catch(error => {
                dispatch({type: 'PAYMENT_ERROR', error})
        })
    }
};