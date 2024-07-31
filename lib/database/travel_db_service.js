import { setObject, getObject } from './object_crud_functions'

const rootName = 'travels'

export const writeTravelToDb = async (travelObject) => {
  try {
    await setObject(rootName, travelObject.id, travelObject)
  } catch (error) {
    throw error
  }
}

export const readTravelFromDb = async (uid) => {
  try {
    return await getObject(rootName, uid)
  } catch (error) {
    throw error
  }
}
