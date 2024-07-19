import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export class ThreeScene {
  constructor(canvas, sizes) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0e1a25);

    const light = new THREE.DirectionalLight();

    light.position.set(0, 10, 5);
    this.scene.add(light);

    this.camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setPixelRatio(2);
    this.renderer.setSize(sizes.width, sizes.height);
    this.renderer.render(this.scene, this.camera);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.autoRotate = true;
  }

  resize(sizes) {
    this.camera.aspect = sizes.width / sizes.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(sizes.width, sizes.height);
  }

  update() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
