import { getDatabase, ref, update, remove, get, set } from 'firebase/data'

export const setObject = async (parentPath, object) => {
  if (object.id == null) throw Error('Setting object has no id')
  const db = getDatabase()
  await set(ref(db, parentPath + '/' + object.id), object)
}

export const removeObject = async ({
  rootName,
  uid,
  collectionName,
  object,
}) => {
  const db = getDatabase()
  const path = rootName + '/' + uid + '/' + collectionName

  await remove(ref(db, path + '/' + object.id))
}

export const updateObjects = async ({
  rootName,
  uid,
  collectionName,
  objects,
}) => {
  const db = getDatabase()
  const path = rootName + '/' + uid + '/' + collectionName

  const updates = {}
  for (const object of objects) {
    updates[path + '/' + object.id] = object
  }

  await update(ref(db), updates)
}

export const getObject = async (object, path) => {
  path = path + '/' + object.id

  const db = getDatabase()
  try {
    const dbObject = await get(ref(db, path))

    if (dbObject) {
      return dbObject
    } else {
      console.error('No data available at this path:', path)
      return null
    }
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}
