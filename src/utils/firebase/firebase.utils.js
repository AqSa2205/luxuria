import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAWxmvWrUKQkdSE2Yg3rmvu2oSBYD0XRqk",
  authDomain: "aqss-luxuria.firebaseapp.com",
  projectId: "aqss-luxuria",
  storageBucket: "aqss-luxuria.appspot.com",
  messagingSenderId: "429993450830",
  appId: "1:429993450830:web:cb8be1969ecec3a26c121f",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserfromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { Name, Email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRef, {
        Name,
        Email,
        creatAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(Email, Password) => {
        if(!Email || !Password) return;
       return await  createUserWithEmailAndPassword(auth, Email, Password)
}


