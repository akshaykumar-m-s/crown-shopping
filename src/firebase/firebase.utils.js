import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBn6dZL8ZphOUUk_LUEgWkas66BoTFCD_o",
    authDomain: "crown-shopping-196eb.firebaseapp.com",
    databaseURL: "https://crown-shopping-196eb.firebaseio.com",
    projectId: "crown-shopping-196eb",
    storageBucket: "crown-shopping-196eb.appspot.com",
    messagingSenderId: "263466723175",
    appId: "1:263466723175:web:4618377df8e7a50f8cb1c2",
    measurementId: "G-WJMMT25BQW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;