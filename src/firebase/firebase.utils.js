import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBn6dZL8ZphOUUk_LUEgWkas66BoTFCD_o',
  authDomain: 'crown-shopping-196eb.firebaseapp.com',
  databaseURL: 'https://crown-shopping-196eb.firebaseio.com',
  projectId: 'crown-shopping-196eb',
  storageBucket: 'crown-shopping-196eb.appspot.com',
  messagingSenderId: '263466723175',
  appId: '1:263466723175:web:4618377df8e7a50f8cb1c2',
  measurementId: 'G-WJMMT25BQW',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
