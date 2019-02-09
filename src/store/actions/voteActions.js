import { firestoreReducer } from "react-redux-firebase";

export const increaseVote = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {   
        const uid = getState().firebase.auth.uid;
        const pid = post.id
        console.log(post.votelist)
        const firestore = getFirestore();
        const docRef = firestore.collection('posts').doc(pid);
        if(post.votelist[uid] === true){
            dispatch({type: 'ALREADY_VOTED'})
            // maybe user can vote more than once time using more money/coin?
        }else{
            firestore.runTransaction(transaction => {
                return transaction.get(docRef).then(doc => {
                    let vote = doc.data().vote;
                    let votelist = doc.data().votelist;
                    if (vote === undefined) vote = 0;
                    vote++;
                    if(votelist === undefined) votelist = '';
                    votelist[uid] = true
                    console.log(vote);
                    console.log(votelist);
                    transaction.update(docRef, {vote, votelist});
                    //transaction.update(docRef, {votelist});
                    return vote;
                });
            }).then(vote => {
                dispatch({type: 'VOTE_INC_SUCCESS', vote});
            }).catch(err => {
                dispatch({type: 'VOTE_INC_FAIL', err})
            })
            console.log('increaseVote')
        }       
    }
}