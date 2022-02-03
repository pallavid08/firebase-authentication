import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';




const firebaseConfig = {
    apiKey: "AIzaSyDzCWzXl3OiWv7ha8_49_XJ3kQv7QE8EKQ",
    authDomain: "authentication-practice-d4aea.firebaseapp.com",
    databaseURL: "https://authentication-practice-d4aea.firebaseio.com",
    projectId: "authentication-practice-d4aea",
    storageBucket: "authentication-practice-d4aea.appspot.com",
    messagingSenderId: "958559155838",
    appId: "1:958559155838:web:cec1290dc78c4cfcd28a2f"
  };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase