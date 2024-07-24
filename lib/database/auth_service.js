import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { createMapPage, createAuthPage } from '../views/router.js'

export let user

export const initAuthService = () => {
  getAuth().onAuthStateChanged((_user) => {
    if (_user) {
      user = _user
      createMapPage()
    } else {
      user = null
      createAuthPage()
    }
  })
}

export const signIn = async () => {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    user = result.user
  } catch (error) {
    throw Error(error.message)
  }
}

export const signOut = () => {
  getAuth().signOut()
}
