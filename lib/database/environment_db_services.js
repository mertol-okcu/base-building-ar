import { setObject, removeObject } from './object_crud_methods'

const parentPath = 'environment'

export const pushToEnvironmentDb = async (object) => {
  await setObject(parentPath, object)
}

export const removeFromEnvironment = async (objectId) => {
  await removeObject(parentPath, objectId)
}

export const getNearbyObjects = async (centerGeohash, radius) => {}
