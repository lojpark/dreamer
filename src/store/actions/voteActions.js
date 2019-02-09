import { firestoreReducer } from "react-redux-firebase";

export const increaseVote = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //이러면 지금 보고있는 post 정보가 여기로 넘어오겟죠?
        // 그럼 넘어온 post 정보에서 id를 얻어서 firebase로 넘기면 갱신을 할 수 있겠지
        /*
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();

        const docRef = firestore.collection('users').doc(uid);
        firestore.runTransaction(transaction => {
            return transaction.get(docRef).then(doc => {
                let vote = doc.data().vote;
                if (vote === undefined) vote = 0;
                vote++;

                console.log(vote); 
                transaction.update(docRef, {vote});
                return vote;
            });
        }).then(vote => {
            dispatch({type: 'VOTE_INC_SUCCESS', vote});
        }).catch(err => {
            dispatch({type: 'VOTE_INC_FAIL', err})
        })
        */
        console.log(post.id)
        const pid = post.id
        const firestore = getFirestore();
        const docRef = firestore.collection('posts').doc(pid);

        firestore.runTransaction(transaction => {
            return transaction.get(docRef).then(doc => {
                let vote = doc.data().vote;
                if (vote === undefined) vote = 0;
                vote++;
                console.log(vote);
                transaction.update(docRef, {vote});
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