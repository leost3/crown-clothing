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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    // any methods of getting , updating or deleting we have to use the document reference object form (userRef)
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
        }catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}
  
  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;