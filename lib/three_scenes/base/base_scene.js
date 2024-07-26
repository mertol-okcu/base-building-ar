import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Mesh,
  MeshBasicMaterial,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TextureLoader,
} from 'three'

import { addMeshFromModel } from '../add_mesh_from_model'
import { texturePaths } from '../../constants/textures'

export class BaseScene extends Scene {
  constructor(base) {
    super()
    const loader = new TextureLoader()
    loader.load(texturePaths.skybox, (texture) => {
      texture.mapping = EquirectangularReflectionMapping
      texture.colorSpace = SRGBColorSpace
      this.background = texture
    })

    const directionalLight = new DirectionalLight(0xffffff, 5)
    directionalLight.position.set(10, 20, 5)
    directionalLight.name = 'directional_light'
    this.add(directionalLight)

    const ambientLight = new AmbientLight(0xffffff, 1)
    ambientLight.name = 'ambient_light'
    this.add(ambientLight)

    const ground = this.getGroundMesh()
    ground.name = 'ground'
    this.add(ground)

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

  getGroundMesh() {
    const geometry = new BoxGeometry(100, 0.1, 100)

    const textureLoader = new TextureLoader()
    const texture = textureLoader.load(texturePaths.grass)

    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping

    const hRepeatTime = 500
    const vRepeatTime = 500
    texture.repeat.set(hRepeatTime, vRepeatTime)

    const material = new MeshBasicMaterial({ map: texture })
    const cube = new Mesh(geometry, material)
    cube.position.y = -0.05
    return cube
  }
}
