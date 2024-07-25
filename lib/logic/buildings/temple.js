import { vec3Object } from '../../functions/object_functions'
import { Transform } from '../behaviours/transform'

export class Temple {
  id

  constructor({ id, position, rotationY }) {
    this.id = id
    Object.assign(this, Transform(position, rotationY))
  }

  toObject() {
    return {
      id: this.id,
      position: vec3Object(this.position),
      rotationY: this.rotationY,
    }
  }
}
