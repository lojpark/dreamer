import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyATDWTVacl4MH3Q49CVAkFwhYGrxOQoj5A",
    authDomain: "dreamer-aa68d.firebaseapp.com",
    databaseURL: "https://dreamer-aa68d.firebaseio.com",
    projectId: "dreamer-aa68d",
    storageBucket: "dreamer-aa68d.appspot.com",
    messagingSenderId: "646246899876"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;