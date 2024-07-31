import { Mover } from '../behaviours/mover'
import { vec3ToObject } from '../../functions/object_functions'
import { Vector3 } from 'three'

export class Chief {
  id

  constructor({ id, position }) {
    this.id = id
    Object.assign(this, Mover(position))
  }

  static fromObject(object) {
    return new Chief({
      id: object.id,
      position: new Vector3(
        object.position.x,
        object.position.y,
        object.position.z
      ),
    })
  }

  toObject() {
    return {
      type: this.constructor.name,
      id: this.id,
      position: vec3ToObject(this.position),
      rotationY: this.rotationY,
    }
  }
}
