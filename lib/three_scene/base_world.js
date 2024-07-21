import { createBoxMesh, createCapsuleMesh } from './shapes'
import { getBuildingColor, getCitizenColor } from './get_colors'
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
    const color = getCitizenColor(citizen)
    const capsule = createCapsuleMesh(1.5, 1, color)

    const pos = citizen.position
    capsule.position.set(pos.x, pos.y, pos.z)
    capsule.rotation.y = citizen.rotationY
    capsule.name = citizen.id

    this.threeScene.add(capsule)
  }

  addBuilding(building) {
    const color = getBuildingColor(building)
    const box = createBoxMesh(1, 1.5, 1, color)

    const pos = building.position
    box.position.set(pos.x, pos.y, pos.z)
    box.rotation.y = building.rotationY
    box.name = building.id

    this.threeScene.add(box)
  }
}
