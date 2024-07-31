import {
  AmbientLight,
  BoxGeometry,
  CameraHelper,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Mesh,
  MeshStandardMaterial,
  Scene,
  SRGBColorSpace,
  TextureLoader,
} from 'three'

import { addMeshFromModel } from '../add_mesh_from_model'
import { texturePaths } from '../../constants/textures'
import { AnimController } from './anim_controller'

export class BaseScene extends Scene {
  animController

  constructor(base) {
    super()

    this.animController = new AnimController()

    const loader = new TextureLoader()
    loader.load(texturePaths.skybox, (texture) => {
      texture.mapping = EquirectangularReflectionMapping
      texture.colorSpace = SRGBColorSpace
      this.background = texture
    })

    const directionalLight = new DirectionalLight(0xffffff, 3)
    directionalLight.position.set(10, 20, 5)
    directionalLight.name = 'directional_light'
    directionalLight.castShadow = true
    this.add(directionalLight)

    const ambientLight = new AmbientLight(0xffffff, 1)
    ambientLight.name = 'ambient_light'
    this.add(ambientLight)

    const groundGeometry = new BoxGeometry(100, 0.1, 100)
    const groundMaterial = new MeshStandardMaterial({ color: 0x80a365 })
    const ground = new Mesh(groundGeometry, groundMaterial)
    ground.position.y = -0.05
    ground.name = 'ground'
    ground.receiveShadow = true
    this.add(ground)

    this.addBuilding(base.temple)

    for (const building of Object.values(base.buildings)) {
      this.addBuilding(building)
    }

    for (const citizen of Object.values(base.citizens)) {
      this.addCitizen(citizen)
    }
  }

  update(deltaInSeconds) {
    this.animController.update(deltaInSeconds)
  }

  addCitizen(citizen) {
    addMeshFromModel(this, citizen, 'citizen', 0.15)
  }

  addBuilding(building) {
    addMeshFromModel(this, building, 'building', 0.5)
  }
}
