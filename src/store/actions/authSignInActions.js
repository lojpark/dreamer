import {admin} from "firebase";

export const signin = (User) => {

    return (dispatch,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().signInWithEmailAndPassword(User.email,User.password).then((response) => {
            firestore.collection("users").doc(response.user.uid).get().then(function(doc){
                if(doc.exists){
                    console.log("Document data:",doc.data());
                }
                else{
                    console.log("Document data:", doc.data());
                }
                dispatch({type: 'SIGNIN_SUCCESS',profile_info : doc.data(),uid:response.user.uid,});

            })
        })

    .catch(error => {
    dispatch({type: 'SIGNIN_ERROR', error})
    })
    }
};