import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpS3W0TzF66_oz3Pvrll7bBxHA3vDuDNc",
    authDomain: "crwn-db-a181c.firebaseapp.com",
    projectId: "crwn-db-a181c",
    storageBucket: "crwn-db-a181c.appspot.com",
    messagingSenderId: "287590856974",
    appId: "1:287590856974:web:d813c2c1565de4c0a97f5f",
    measurementId: "G-L35WW0TDSE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;