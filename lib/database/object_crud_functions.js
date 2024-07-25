import { getDatabase, ref, update, remove, get, set } from 'firebase/database'

//create one object
export const setObject = async (parentPath, object) => {
  if (object.id == null) throw Error('Setting object has no id')
  const db = getDatabase()
  const path = parentPath + '/' + object.id
  await set(ref(db, path), object)
}

//delete one object
export const removeObject = async (parentPath, objectId) => {
  const db = getDatabase()
  const path = parentPath + '/' + objectId
  await remove(ref(db, path))
}

//update many object
export const updateObjects = async (parentPath, objects) => {
  const db = getDatabase()
  const updates = {}
  for (const object of objects) {
    path = parentPath + '/' + object.id
    updates[path] = object
  }
  await update(ref(db), updates)
}

//get one object
export const getObject = async (parentPath, objectId) => {
  const db = getDatabase()
  const path = parentPath + '/' + objectId
  const snapshot = await get(ref(db, path))
  const dbObject = snapshot.val()
  if (dbObject) {
    return dbObject
  } else {
    console.error('No data available at this path:', path)
    return null
  }
}
