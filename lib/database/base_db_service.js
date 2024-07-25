import { setObject, getObject } from './object_crud_functions'

const rootName = 'bases'

const writeBaseToDb = async (baseObject) => {
  await setObject(rootName, baseObject)
}

const readBaseFromDb = async (uid) => {
  return await getObject(rootName, uid)
}
/*
//temple crud methods
const templeCollection = 'temple'
export const setTempleData = async (uid, templeObject) => {
  parentPath = rootName + '/' + uid + templeCollection
  await setObject(parentPath, templeObject)
}

export const removeTempleData = async (uid, templeObject) => {
  parentPath = rootName + '/' + uid + templeCollection
  await removeObject(parentPath, templeObject)
}

export const updateTempleData = async (uid, templeObjects) => {
  parentPath = rootName + '/' + uid + templeCollection
  await updateObjects(parentPath, templeObjects)
}

//buildings
const buildingCollection = 'buildings'

export const setBuildingData = async (uid, buildingObject) => {
  parentPath = rootName + '/' + uid + buildingCollection
  await setObject(parentPath, buildingObject)
}

export const removeBuildingData = async (uid, buildingObject) => {
  parentPath = rootName + '/' + uid + buildingCollection
  await removeObject(parentPath, buildingObject)
}

export const updatebuildingData = async (uid, buildingObjects) => {
  parentPath = rootName + '/' + uid + buildingCollection
  await updateObjects(parentPath, buildingObjects)
}

//citizens crud methods
const citizenCollection = 'citizens'

export const setCitizenData = async (uid, citizenObject) => {
  parentPath = rootName + '/' + uid + citizenCollection
  await setObject(parentPath, citizenObject)
}

export const removeCitizenData = async (uid, citizenObject) => {
  parentPath = rootName + '/' + uid + citizenCollection
  await removeObject(parentPath, citizenObject)
}

export const updateCitizensData = async (uid, citizenObjects) => {
  parentPath = rootName + '/' + uid + citizenCollection
  await updateObjects(parentPath, citizenObjects)
}

//resources crud methods
const resourceCollection = 'resources'

export const setResourceData = async (uid, resourceObject) => {
  parentPath = rootName + '/' + uid + resourceCollection
  await setObject(parentPath, resourceObject)
}

export const removeResourceData = async (uid, resourceObject) => {
  parentPath = rootName + '/' + uid + resourceCollection
  await removeObject(parentPath, resourceObject)
}

export const updateResourcesData = async (uid, resourceObjects) => {
  parentPath = rootName + '/' + uid + resourceCollection
  await updateObjects(parentPath, resourceObjects)
}

//tools crud methods
const toolsCollection = 'tools'
export const setToolData = async (uid, toolObject) => {
  parentPath = rootName + '/' + uid + toolsCollection
  await setObject(parentPath, toolObject)
}

export const removeToolData = async (uid, toolObject) => {
  parentPath = rootName + '/' + uid + toolsCollection
  await removeObject(parentPath, toolObject)
}

export const updateToolsData = async (uid, toolObjects) => {
  parentPath = rootName + '/' + uid + toolsCollection
  await updateObjects(parentPath, toolObjects)
}*/
