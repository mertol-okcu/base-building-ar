import { AnimationClip, AnimationMixer } from 'three'
export class AnimController {
  mixers = {}

  constructor() {}

  addMixer(meshName, mixer) {
    this.mixers[meshName] = mixer
  }

  startAnimation(mesh, animName) {
    let mixer = this.mixers[mesh.name]
    if (mixer == null) {
      mixer = new AnimationMixer(mesh)
      this.mixers[mesh.name] = mixer
      mesh.animations.forEach((clip) => mixer.clipAction(clip).play())
    }
  }

  update(deltaInSeconds) {
    for (const mixer of Object.values(this.mixers)) {
      mixer.update(deltaInSeconds)
    }
  }
}
