import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaMroLSgXihQR6YqM5OIzGafBLjXWu5Uc",
    authDomain: "crown-db-e3316.firebaseapp.com",
    databaseURL: "https://crown-db-e3316.firebaseio.com",
    projectId: "crown-db-e3316",
    storageBucket: "",
    messagingSenderId: "338209037741",
    appId: "1:338209037741:web:e968ecf45b051c6a"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;