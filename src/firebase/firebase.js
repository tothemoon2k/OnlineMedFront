import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFxUlM6y2Gn28V1X3Az9z0AJjJteEmQ4I",
  authDomain: "doctorsnotev2.firebaseapp.com",
  projectId: "doctorsnotev2",
  storageBucket: "doctorsnotev2.appspot.com",
  messagingSenderId: "451856772837",
  appId: "1:451856772837:web:6ce86c28578656a89cae0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {firestore, auth};