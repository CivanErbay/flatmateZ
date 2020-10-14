import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCY1FDXIcn_V2MvPkCzWae77zK_p78I4v0",
    authDomain: "soemmerclean.firebaseapp.com",
    databaseURL: "https://soemmerclean.firebaseio.com",
    projectId: "soemmerclean",
    storageBucket: "soemmerclean.appspot.com",
    messagingSenderId: "202001750591",
    appId: "1:202001750591:web:bed8eb6efab9569cf3368a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;