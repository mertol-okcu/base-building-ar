import { setObject, getObject } from './object_crud_functions'

const rootName = 'bases'

export const writeBaseToDb = async (baseObject) => {
  try {
    await setObject(rootName, baseObject)
  } catch (error) {
    throw error
  }
}

export const readBaseFromDb = async (uid) => {
  try {
    return await getObject(rootName, uid)
  } catch (error) {
    throw error
  }
}
