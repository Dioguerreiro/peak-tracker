import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG7Bzvwv_Q6XRmFBgzYXXzCkHU0825L9o",
  authDomain: "the-dash-3fbc7.firebaseapp.com",
  projectId: "the-dash-3fbc7",
  storageBucket: "the-dash-3fbc7.appspot.com",
  messagingSenderId: "924478315468",
  appId: "1:924478315468:web:2212d260870798df06db69",
  measurementId: "G-7JHWQQEXQS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
