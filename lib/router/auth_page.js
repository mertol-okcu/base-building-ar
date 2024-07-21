import { user, signIn } from '../database/auth_service.js'

import { setUserEmail, setUserPhotoUrl } from '../database/user_db_service.js'

export const initAuthPage = () => {
  document
    .getElementById('login-button')
    .addEventListener('click', async (event) => {
      await signIn()

      if (user != null) {
        // setUserName(user.uid, user.name);
        setUserEmail(user.uid, user.email)
        setUserPhotoUrl(user.uid, user.photoURL)
      }
    })
}
