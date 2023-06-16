import { useEffect } from "react";
import {
  signInWithGooglePopUp,
  createUserfromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import SignupForm from "../../component/sign-up_Form/signUp.component";

const Signin = () => {
  useEffect(() => {
    const getRes = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = createUserfromAuth(response.user);
      }
    };
    getRes();
  }, []);
  const signInHandler = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const userDocRef = createUserfromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={signInHandler}>Sign In</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with redirect</button>

      <SignupForm />
    </div>
  );
};

export default Signin;
