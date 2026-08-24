import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "fir-p2-9ee80.firebaseapp.com",
  projectId: "fir-p2-9ee80",
  storageBucket: "fir-p2-9ee80.firebasestorage.app",
  messagingSenderId: "1034399184826",
  appId: "1:1034399184826:web:01e6a4aed349585a79cf83"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;