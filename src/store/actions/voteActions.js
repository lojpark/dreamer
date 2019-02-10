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
                    transaction.update(postRef, {vote, votelist});
                    return vote;
                });
            }).then(vote => {
                dispatch({type: 'VOTE_INC_SUCCESS'});
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

        // Restrict donate myself
        if (userRef.id === authorRef.id) {
            dispatch({type: 'DONATE_MYSELF'});
        }
        // Donate
        else {
            // Decrease donator's coin
            firestore.runTransaction(transaction => {
                return transaction.get(userRef).then(doc => {
                    let coin = doc.data().coin;
                    if (coin <= 0) {
                        transaction.update(userRef, {coin});
                        return -1;
                    }
                    coin--;
                    transaction.update(userRef, {coin});
                    return coin;
                });
            }).then(coin => {
                if (coin == -1)
                    dispatch({type: 'REQUIRE_MORE_COIN'});
                else {
                    dispatch({type: 'COIN_INC_SUCCESS'});

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
                        dispatch({type: 'DONATE_INC_SUCCESS'});
                    }).catch(err => {
                        dispatch({type: 'DONATE_INC_FAIL', err})
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
                        dispatch({type: 'COIN_INC_SUCCESS'});
                    }).catch(err => {
                        dispatch({type: 'COIN_INC_FAIL', err})
                    })
                }
            }).catch(err => {
                dispatch({type: 'COIN_INC_FAIL', err})
            })
        }
    }
}

export const resetVoteResult = () => {
    return (dispatch) => {
        dispatch({type: 'RESET_VOTE_RESULT'});
    }
}