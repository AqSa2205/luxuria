import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserfromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserfromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={ logGoogleUser}>
        Sign in through your google account
      </button>
    </div>
  );
};

export default SignIn;
