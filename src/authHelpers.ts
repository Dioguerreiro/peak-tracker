import { GoogleAuthProvider } from "firebase/auth";
import {
  signInWithPopup,
  signInWithEmailAndPassword as signInWithEmailAndPasswordBase,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordBase,
  sendPasswordResetEmail as sendPasswordResetEmailBase,
  signOut as signOutBase,
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth } from "./firebase";

const app = auth.app;
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email: string, password: string): Promise<string | null> => {
  try {
    await signInWithEmailAndPasswordBase(auth, email, password);
    return null;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
    return err.message;
  }
};

export const registerWithEmailAndPassword = async (name: string, email: string, password: string): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPasswordBase(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordResetEmail = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmailBase(auth, email);
    alert("Password reset link sent!");
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = (): void => {
  signOutBase(auth);
};
