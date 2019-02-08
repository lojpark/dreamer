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

export const buyCoin = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();

        const docRef = firestore.collection('users').doc(uid);
        firestore.runTransaction(transaction => {
            return transaction.get(docRef).then(doc => {
                let coin = doc.data().coin;
                if (coin === undefined) coin = 0;
                coin++;

                console.log(coin); 
                transaction.update(docRef, {coin});
                return coin;
            });
        }).then(coin => {
            dispatch({type: 'BUY_COIN_SUCCESS', coin});
        }).catch(err => {
            dispatch({type: 'BUY_COIN_FAIL', err})
        })
    }
}

export const resetUserResult = () => {
    return (dispatch) => {
        dispatch({type: 'RESET_USER_RESULT'});
    }
}