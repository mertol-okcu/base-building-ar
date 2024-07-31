import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import {
  buildingModelPaths,
  citizenModelPaths,
} from '../constants/model_paths.js'
import { AnimationMixer } from 'three'

export const addMeshFromModel = (scene, object, type, scale = 1) => {
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
      mesh.scale.set(scale, scale, scale)
      mesh.castShadow = true
      mesh.receiveShadow = true
      scene.add(mesh)

      if (gltf.animations.length > 0) {
        mesh.animations = gltf.animations
        const mixer = new AnimationMixer(mesh)
        scene.animController.addMixer(mesh.name, mixer)
      
    },
    undefined,
    (error) => {
      console.error(error)
    }
  )
}
