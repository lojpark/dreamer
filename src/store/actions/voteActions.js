import { firestoreReducer } from "react-redux-firebase";
import { resetUserResult } from "./userActions";

export const increaseVote = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {   
        const uid = getState().firebase.auth.uid;
        const pid = post.id
        const firestore = getFirestore();
        const postRef = firestore.collection('posts').doc(pid);
        if(post.votelist[uid] === true){
            dispatch({type: 'ALREADY_VOTED'})
        }else{
            firestore.runTransaction(transaction => {
                return transaction.get(postRef).then(doc => {
                    let vote = doc.data().vote;
                    let votelist = doc.data().votelist;
                    if (vote === undefined) vote = 0;
                    vote++;
                    if(votelist === undefined) votelist = {};
                    votelist[uid] = true
                    console.log(vote);
                    console.log(votelist);
                    transaction.update(postRef, {vote, votelist});
                    return vote;
                });
            }).then(vote => {
                dispatch({type: 'VOTE_INC_SUCCESS', vote});
            }).catch(err => {
                dispatch({type: 'VOTE_INC_FAIL', err})
            })
        }       
    }
}

export const donate = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {   
        const uid = getState().firebase.auth.uid;
        const aid = post.authorId
        const pid = post.id
        const firestore = getFirestore();
        const postRef = firestore.collection('posts').doc(pid);
        const userRef = firestore.collection('users').doc(uid);
        const authorRef = firestore.collection('users').doc(aid);

        // Increase post's coin
        firestore.runTransaction(transaction => {
            return transaction.get(postRef).then(doc => {
                let coin = doc.data().coin;
                if (coin === undefined) coin = 0;
                coin++;
                transaction.update(postRef, {coin});
                return coin;
            });
        }).then(coin => {
            dispatch({type: 'DONATE_INC_SUCCESS', coin});
        }).catch(err => {
            dispatch({type: 'DONATE_INC_FAIL', err})
        })
        
        // Decrease donator's coin
        firestore.runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                let coin = doc.data().coin;
                coin--;
                transaction.update(userRef, {coin});
                return coin;
            });
        }).then(coin => {
            dispatch({type: 'COIN_INC_SUCCESS', coin});
        }).catch(err => {
            dispatch({type: 'COIN_INC_FAIL', err})
        })

        // Increase author's coin
        firestore.runTransaction(transaction => {
            return transaction.get(authorRef).then(doc => {
                let coin = doc.data().coin;
                coin++;
                transaction.update(authorRef, {coin});
                return coin;
            });
        }).then(coin => {
            dispatch({type: 'COIN_INC_SUCCESS', coin});
        }).catch(err => {
            dispatch({type: 'COIN_INC_FAIL', err})
        })        
    }
}