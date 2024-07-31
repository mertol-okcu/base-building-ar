import { AnimationClip, AnimationMixer } from 'three'
export class AnimController {
  mixers = {}

  constructor() {}

  addMixer(meshName, mixer) {
    this.mixers[meshName] = mixer
  }

  startAnimation(mesh, animName) {
    const mixer = this.mixers[mesh.name]
    const clips = mesh.animations
    if (clips.length === 0) {
      console.error('No animations in the mesh: ' + mesh.name)
    } else {
      const clip = AnimationClip.findByName(clips, animName)
      const action = mixer.clipAction(clip)
      action.play()
    }
  }

  stopAnimation(mesh, animName) {
    const mixer = this.mixers[mesh.name]
    const clips = mesh.animations
    if (clips.length === 0) {
      console.error('No animations in the mesh: ' + mesh.name)
    } else {
      const clip = AnimationClip.findByName(clips, animName)
      const action = mixer.clipAction(clip)
      action.stop()
    }
  }

  update(deltaInSeconds) {
    for (const mixer of Object.values(this.mixers)) {
      mixer.update(deltaInSeconds)
    }
  }
}
