import {
  createBuildingMesh,
  createCapsuleMesh,
  createCitizenMesh,
} from './shapes'
import { ThreeScene } from './three_scene'

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
    const buildingMesh = createBuildingMesh(building)

    const pos = building.position
    buildingMesh.position.set(pos.x, pos.y, pos.z)
    buildingMesh.rotation.y = building.rotationY
    buildingMesh.name = building.id

    this.threeScene.add(buildingMesh)
  }
}
