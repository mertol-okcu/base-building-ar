import { getDatabase, ref, update, remove, get, set } from 'firebase/database'

export const setObject = async (parentPath, key, value) => {
  const db = getDatabase()
  try {
    const path = parentPath + '/' + key

    await set(ref(db, path), value)
  } catch (error) {
    throw error
  }
}

export const removeObject = async (parentPath, key) => {
  const db = getDatabase()
  try {
    const path = parentPath + '/' + key
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

export const getObject = async (parentPath, key) => {
  const db = getDatabase()
  try {
    const path = parentPath + '/' + key
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
