
export const changePayment = (UserPayment,uid) => {
    console.log("@@@@"+uid);
    console.log("check");

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("check");

        const firestore = getFirestore();
            firestore.collection('users').doc(uid).set({
            card: {
                cardName: UserPayment.cardName,
                cardNumber : UserPayment.cardNumber,
                expDate : UserPayment.expDate,
                cvv : UserPayment.cvv
            }
        },{merge:true}).then(() => {
            dispatch({type: 'PAYMENT_SUCCESS',payment_info : UserPayment});
        }).catch(error => {
                dispatch({type: 'PAYMENT_ERROR', error})
        })
    }
};