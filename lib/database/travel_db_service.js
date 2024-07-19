import { pushObject, removeObject, updateObjects } from "./object_crud_methods";

const rootName = "travels";

//citizens crud methods
const citizenCollection = "citizens";

export const addCitizenData = async ({ uid, citizenObject }) => {
  await pushObject(rootName, uid, citizenCollection, citizenObject);
};

export const removeCitizenData = async ({ uid, citizenObject }) => {
  await removeObject(rootName, uid, citizenCollection, citizenObject);
};

export const updateCitizensData = async ({ uid, citizenObjects }) => {
  await updateObjects(rootName, uid, citizenCollection, citizenObjects);
};

//tools crud methods
const resourceCollection = "resources";

export const addResourceData = async ({ uid, resourceObject }) => {
  await pushObject(rootName, uid, resourceCollection, resourceObject);
};

export const removeResourceData = async ({ uid, resourceObject }) => {
  await removeObject(rootName, uid, resourceCollection, resourceObject);
};

export const updateResourcesData = async ({ uid, resourceObjects }) => {
  await updateObjects(rootName, uid, resourceCollection, resourceObjects);
};

//resources crud methods
const toolsCollection = "tools";
export const addToolData = async ({ uid, toolObject }) => {
  await pushObject(rootName, uid, toolsCollection, toolObject);
};

export const removeToolData = async ({ uid, toolObject }) => {
  await removeObject(rootName, uid, toolsCollection, toolObject);
};

export const updateToolsData = async ({ uid, toolObjects }) => {
  await updateObjects(rootName, uid, toolsCollection, toolObjects);
};
