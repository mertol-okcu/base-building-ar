import { getDatabase, ref, update, remove, get, set } from 'firebase/database'

export const setObject = async (parentPath, object) => {
  const db = getDatabase()
  if (object.id == null) throw Error('Setting object has no id')
  try {
    const path = parentPath + '/' + object.id

    await set(ref(db, path), object)
  } catch (error) {
    throw error
  }
}

export const removeObject = async (parentPath, objectId) => {
  const db = getDatabase()
  try {
    const path = parentPath + '/' + objectId
    await remove(ref(db, path))
  } catch (error) {
    throw error
  }
}

export const updateObjects = async (parentPath, objects) => {
  const db = getDatabase()
  try {
    const updates = {}
    for (const object of objects) {
      path = parentPath + '/' + object.id
      updates[path] = object
    }
    await update(ref(db), updates)
  } catch (error) {
    throw error
  }
}

export const getObject = async (parentPath, objectId) => {
  const db = getDatabase()
  try {
    const path = parentPath + '/' + objectId
    const snapshot = await get(ref(db, path))
    const dbObject = snapshot.val()
    if (dbObject) {
      return dbObject
    } else {
      // console.log('No data available at this path:', path)
      return null
    }
  } catch (error) {
    throw error
  }
}
