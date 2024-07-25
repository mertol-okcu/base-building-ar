import { Mover } from '../behaviours/mover'
import { vec3Object } from '../../functions/object_functions'

export class Chief {
  id

  constructor({ id, position }) {
    this.id = id
    Object.assign(this, Mover(position))
  }

  toObject() {
    return {
      type: this.constructor.name,
      id: this.id,
      position: vec3Object(this.position),
      rotationY: this.rotationY,
    }
  }
}
