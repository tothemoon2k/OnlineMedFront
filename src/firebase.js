import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOQVflZlTRi3swlV2zodVSrHiF_fWs4Lw",
  authDomain: "onlinemed-3fcbb.firebaseapp.com",
  projectId: "onlinemed-3fcbb",
  storageBucket: "onlinemed-3fcbb.firebasestorage.app",
  messagingSenderId: "1014480689031",
  appId: "1:1014480689031:web:1a9fd61ece9c766dcd2522"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);