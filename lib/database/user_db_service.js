import { getDatabase, ref, set } from 'firebase/database'
import { setObject } from './object_crud_functions'

const rootName = 'users'

export const setUserName = async (uid, name) => {
  try {
    await setObject(rootName + '/' + uid, { name: name })
  } catch (error) {
    throw error
  }
}

export const setUserEmail = async (uid, email) => {
  try {
    await setObject(rootName + '/' + uid, { email: email })
  } catch (error) {
    throw error
  }
}

export const setUserPhotoUrl = async (uid, photoUrl) => {
  try {
    await setObject(rootName + '/' + uid, { photoUrl: photoUrl })
  } catch (error) {
    throw error
  }
}

export const setUserLocation = async (uid, lat, long) => {
  try {
    await setObject(rootName + '/' + uid, {
      location: { lat: lat, long: long },
    })
  } catch (error) {
    throw error
  }
}
