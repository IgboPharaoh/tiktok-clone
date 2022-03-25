import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXNuePxZ4LXEsyX_AQa4uLGl8PC0thudw",
    authDomain: "tiktok-clone-9edba.firebaseapp.com",
    projectId: "tiktok-clone-9edba",
    storageBucket: "tiktok-clone-9edba.appspot.com",
    messagingSenderId: "1082900799067",
    appId: "1:1082900799067:web:8f026b5e2031d6efaa297e",
    measurementId: "G-EFN0CT46T8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
export default db;