import { getDatabase, ref, push, update, remove } from 'firebase/data'

export const pushObject = async ({ rootName, uid, collectionName, object }) => {
  const db = getDatabase()
  const path = rootName + '/' + uid + '/' + collectionName
  object.id = push(ref(db, path)).key

  const updates = {}
  updates[path + '/' + object.id] = object

  await update(ref(db), updates)
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
