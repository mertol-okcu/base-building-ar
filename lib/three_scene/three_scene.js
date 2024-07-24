import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export class ThreeScene {
  constructor(canvas, sizes) {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xddddcc)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5)
    directionalLight.position.set(10, 20, 5)
    this.scene.add(directionalLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    this.scene.add(ambientLight)

    this.camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
    this.camera.position.z = 15
    this.camera.position.y = 15
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    this.scene.add(this.camera)

    this.renderer = new THREE.WebGLRenderer({ canvas })
    this.renderer.setPixelRatio(2)
    this.renderer.setSize(sizes.width, sizes.height)
    this.renderer.render(this.scene, this.camera)

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.controls.autoRotateSpeed = 0.5
    this.controls.autoRotate = true
  }

  getObjectByName(name) {
    return this.scene.getObjectByName(name)
  }

  add(object) {
    this.scene.add(object)
  }

  resize(sizes) {
    this.camera.aspect = sizes.width / sizes.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(sizes.width, sizes.height)
  }

  update() {
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }
}
