import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOjH6KX72b7VcLCaoqzTvANQBLUsCEjX8",
    authDomain: "tinder-clone-6aa63.firebaseapp.com",
    databaseURL: "https://tinder-clone-6aa63.firebaseio.com",
    projectId: "tinder-clone-6aa63",
    storageBucket: "tinder-clone-6aa63.appspot.com",
    messagingSenderId: "33565524023",
    appId: "1:33565524023:web:483fcfccb49da27ba4ffb2",
    measurementId: "G-7S1W7SVGE2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database