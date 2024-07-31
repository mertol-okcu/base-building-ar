import { setObject, removeObject } from './object_crud_methods'

const parentPath = 'environment'

export const pushToEnvironmentDb = async (environmentObject) => {
  try {
    await setObject(parentPath, environmentObject.id, environmentObject)
  } catch (error) {
    throw error
  }
}

export const removeFromEnvironment = async (environmentObjectId) => {
  await removeObject(parentPath, environmentObjectId)
}

export const getNearbyObjects = async (centerGeohash, radius) => {}
