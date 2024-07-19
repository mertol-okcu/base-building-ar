import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { goToMapPage, goToAuthPage } from "../router/router.js";

export let user;

export const initAuthService = () => {
  getAuth().onAuthStateChanged((_user) => {
    if (_user) {
      user = _user;
      goToMapPage();
    } else {
      user = null;
      goToAuthPage();
    }
  });
};

export const signIn = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    user = result.user;
  } catch (error) {
    throw Error(error.message);
  }
};

export const signOut = () => {
  getAuth().signOut();
};
