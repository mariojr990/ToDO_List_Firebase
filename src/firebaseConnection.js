import firebase from 'firebase/app'
import  'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyBoSdyA66UvRiCf4vPx6d-AJNvm9RWuw44",
    authDomain: "meuapp-68565.firebaseapp.com",
    databaseURL: "https://meuapp-68565-default-rtdb.firebaseio.com",
    projectId: "meuapp-68565",
    storageBucket: "meuapp-68565.appspot.com",
    messagingSenderId: "199184386368",
    appId: "1:199184386368:web:c3cdc339dd5c89e9aa92a5",
    measurementId: "G-P51NN10P2X"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase