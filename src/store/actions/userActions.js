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

export const addCareer = (career) => {
    return (dispatch, getState, {getFirestore}) => {
        const user = getState().firestore.ordered.users[0];
        const firestore = getFirestore();
        let careers;
        
        if (user.careers === undefined)
            careers = [];
        else {
            careers = user.careers.map(item => {
                return item
            });
        }
        
        careers.push(career);
        firestore.collection('users').doc(user.id).update({
            careers
        }).then(() => {
            dispatch({type: 'USER_CAREER_ADD_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'USER_CAREER_ADD_FAIL', err});
        })
    }
}

export const deleteCareer = (target_idx) => {
    return (dispatch, getState, {getFirestore}) => {
        const user = getState().firestore.ordered.users[0];
        const firestore = getFirestore();

        //assume there is at least one career added to user
        let careers = user.careers.filter((career, idx) => {
            return idx !== target_idx
        });
        firestore.collection('users').doc(user.id).update({
            careers
        }).then(() => {
            dispatch({type: 'USER_CAREER_REMOVE_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'USER_CAREER_REMOVE_FAIL', err});
        })
    }
}
const uploadPhoto = (storage, file, uid) => {
    return new Promise((resolve, reject) => {
        storage.ref('profiles').child(uid + '/profile_pic').put(file).then(snap => {
            storage.ref('profiles').child(uid + '/profile_pic').getDownloadURL().then(url => {
                resolve(url);
            })
        }).catch(err => {
            reject(err);
        })
    })
}
export const uploadProfilePic = (file) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        const storage = getFirebase().storage();
        console.log(uid);
        let profile_url = await uploadPhoto(storage, file, uid);
        console.log(profile_url);
        firestore.collection('users').doc(uid).update({
            profile_url
        }).then(() => {
            dispatch({type: 'PROFILE_UPDATE_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'PROFILE_UPDATE_FAIL', err});
        })

    }
}