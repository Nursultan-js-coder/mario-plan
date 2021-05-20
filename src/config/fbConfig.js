import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyBme67jwoI1onnrcSpbwZyZyYznXIPkuKQ",
  authDomain: "mario-plan-5f182.firebaseapp.com",
  projectId: "mario-plan-5f182",
  storageBucket: "mario-plan-5f182.appspot.com",
  messagingSenderId: "869945583458",
  appId: "1:869945583458:web:7ef3aae5736d94e8946e3b",
  measurementId: "G-BX5VH0CRV4"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 