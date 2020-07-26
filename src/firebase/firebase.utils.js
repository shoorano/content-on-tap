import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9gHrRhyNv1k8DIffTcvySm3-7zph-9z0",
    authDomain: "content-on-tap-db.firebaseapp.com",
    databaseURL: "https://content-on-tap-db.firebaseio.com",
    projectId: "content-on-tap-db",
    storageBucket: "content-on-tap-db.appspot.com",
    messagingSenderId: "339990808379",
    appId: "1:339990808379:web:efd0025199bc7d5567991e",
    measurementId: "G-8VJQQNH0LQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;