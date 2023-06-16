import { initializeApp } from "firebase/app";
import{getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
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
        promt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserfromAuth = async(userAuth) => {
        const userDocRef = doc( db, 'user', userAuth.uid);

        console.log(userDocRef);

        const userSnapshot = await getDoc(userDocRef);
        console.log(userSnapshot);
}