import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import {
  buildingModelPaths,
  citizenModelPaths,
} from '../constants/model_paths.js'

export const addMeshFromModel = (scene, object, type) => {
  const loader = new GLTFLoader()
  let path
  if (type === 'building') {
    path = buildingModelPaths(object.constructor.name)
  } else if (type === 'citizen') {
    path = citizenModelPaths(object.constructor.name)
  }

  if (path == undefined) {
    throw Error('Model path cannot be found')
  }

  loader.load(
    path,
    (gltf) => {
      const mesh = gltf.scene
      const pos = object.position
      mesh.position.set(pos.x, pos.y, pos.z)
      mesh.rotation.y = object.rotationY
      mesh.name = object.id
      scene.add(mesh)
    },
    undefined,
    (error) => {
      console.error(error)
    }
  )
}
