import { createCitizenMesh } from './custom_meshes'
import { ThreeScene } from './three_scene'
import { buildingModelPaths } from '../logic/constants/model_paths.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export class BaseWorld {
  threeScene
  base

  constructor(canvas, size, base) {
    this.threeScene = new ThreeScene(canvas, size)
    this.base = base

    for (const citizen of Object.values(this.base.citizens)) {
      this.addCitizen(citizen)
    }

    this.addBuilding(base.temple)

    for (const building of Object.values(this.base.buildings)) {
      this.addBuilding(building)
    }
  }

  update() {
    for (const citizen of Object.values(this.base.citizens)) {
      const mesh = this.threeScene.getObjectByName(citizen.id)
      const pos = citizen.position
      mesh.position.set(pos.x, pos.y, pos.z)
    }

    this.threeScene.update()
  }

  addCitizen(citizen) {
    const citizenMesh = createCitizenMesh(citizen)

    const pos = citizen.position
    citizenMesh.position.set(pos.x, pos.y, pos.z)
    citizenMesh.rotation.y = citizen.rotationY
    citizenMesh.name = citizen.id

    this.threeScene.add(citizenMesh)
  }

  addBuilding(building) {
    const loader = new GLTFLoader()
    const path = buildingModelPaths[building.constructor.name]
    if (path == undefined) {
      throw Error('Model path cannot be found')
    }
    loader.load(
      path,
      (gltf) => {
        const mesh = gltf.scene
        const pos = building.position
        mesh.position.set(pos.x, pos.y, pos.z)
        mesh.rotation.y = building.rotationY
        mesh.name = building.id
        this.threeScene.add(mesh)
      },
      undefined,
      (error) => {
        console.error(error)
      }
    )
  }
}
