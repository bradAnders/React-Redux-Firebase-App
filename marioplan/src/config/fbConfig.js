import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAs7bAbxtSE-XgaRH9f2AtBMuVdKCrVwwM",
  authDomain: "net-ninja-marioplan-936fd.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-936fd.firebaseio.com",
  projectId: "net-ninja-marioplan-936fd",
  storageBucket: "net-ninja-marioplan-936fd.appspot.com",
  messagingSenderId: "651524328785",
  appId: "1:651524328785:web:3fca33c9f0cf0f94575770",
  measurementId: "G-M2STW4398Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;