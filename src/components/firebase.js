import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDsiN4eNj2sN2n7wgQsHNfhBAl9SoOVdI",
  authDomain: "discord-clone-5ee2f.firebaseapp.com",
  projectId: "discord-clone-5ee2f",
  storageBucket: "discord-clone-5ee2f.appspot.com",
  messagingSenderId: "538832039434",
  appId: "1:538832039434:web:b5a42546e769e4549b79f3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
