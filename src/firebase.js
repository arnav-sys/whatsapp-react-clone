import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiPhntjnvwv-4VTQ33eOxft1gmLej6YLE",
  authDomain: "whatsapp-clone-4fd63.firebaseapp.com",
  projectId: "whatsapp-clone-4fd63",
  storageBucket: "whatsapp-clone-4fd63.appspot.com",
  messagingSenderId: "850174725316",
  appId: "1:850174725316:web:d676ca9adf8b2bf170cd91",
  measurementId: "G-VR3X3DMZ5X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();
export { auth, provider };

export default db;
