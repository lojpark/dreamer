export const updateUserInfo = ({firstName, lastName}) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();

        firestore.collection('users').doc(uid).update({
            firstName,
            lastName,
        }).then(() => {
            dispatch({type: 'USER_UPDATE_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'USER_UPDATE_FAIL', err});
        })

    }
}

export const updatePaymentMethod = ({cardName, cardNumber, cvv, expDate }) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();

        firestore.collection('users').doc(uid).update({
            card: {
                cardName,
                cardNumber,
                cvv,
                expDate,
            }
        }).then(() => {
            dispatch({type: 'PAYMENT_UPDATE_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'PAYMENT_UPDATE_FAIL', err});
        })
    }  
}