import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmFOvNurufYMgP9LB4f93Zi7JdqS-RdOo",
  authDomain: "ultidev-portfolio.firebaseapp.com",
  databaseURL: "https://ultidev-portfolio.firebaseio.com",
  projectId: "ultidev-portfolio",
  storageBucket: "ultidev-portfolio.appspot.com",
  messagingSenderId: "1003353402944",
  appId: "1:1003353402944:web:827027ea113cc046af39a5",
  measurementId: "G-5CNXJ4NWTT",
};
const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
