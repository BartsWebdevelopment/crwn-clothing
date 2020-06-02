import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBBxBYskC9yHLVffYUm24S1zS-5BnCwK78",
    authDomain: "crwn-db-9ceee.firebaseapp.com",
    databaseURL: "https://crwn-db-9ceee.firebaseio.com",
    projectId: "crwn-db-9ceee",
    storageBucket: "crwn-db-9ceee.appspot.com",
    messagingSenderId: "366866885034",
    appId: "1:366866885034:web:b4657534b3bfd7d85c63d3"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWitGoogle = () => auth.signInWithPopup(provider);

export default firebase;