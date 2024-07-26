import { AnimationClip, AnimationMixer } from 'three'
export class AnimController {
  mixers = {}

  constructor() {}

  startAnimation(mesh, animName) {
    let mixer = this.mixers[mesh.name]
    if (mixer == null) {
      mixer = new AnimationMixer(mesh)
      this.mixers[mesh.name] = mixer
    }

    const clips = mesh.animations
    if (clips.length == 0) {
      throw Error('Animations of this mesh is empty')
    }
    const clip = AnimationClip.findByName(clips, animName)
    const action = mixer.clipAction(clip)
    action.play()
  }

  update(deltaInSeconds) {
    for (const mixer of Object.values(this.mixers)) {
      mixer.update(deltaInSeconds)
    }
  }
}
