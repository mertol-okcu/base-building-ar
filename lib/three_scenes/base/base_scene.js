import { AmbientLight, Color, DirectionalLight, Scene } from 'three'
import { addMeshFromModel } from '../add_mesh_from_model'

export class BaseScene extends Scene {
  constructor(base) {
    super()
    this.background = new Color(0xddddcc)

    const directionalLight = new DirectionalLight(0xffffff, 5)
    directionalLight.position.set(10, 20, 5)
    this.add(directionalLight)

    const ambientLight = new AmbientLight(0xffffff, 1)
    this.add(ambientLight)

    this.addBuilding(base.temple)

    for (const building of Object.values(base.buildings)) {
      this.addBuilding(building)
    }

    for (const citizen of Object.values(base.citizens)) {
      this.addCitizen(citizen)
    }
  }

  update(deltaInSeconds) {}

  addCitizen(citizen) {
    addMeshFromModel(this, citizen, 'citizen')
  }

  addBuilding(building) {
    addMeshFromModel(this, building, 'building')
  }
}
