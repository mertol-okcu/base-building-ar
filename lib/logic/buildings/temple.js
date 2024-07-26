import { Vector3 } from 'three'
import { vec3Object } from '../../functions/object_functions'
import { Transform } from '../behaviours/transform'

export class Temple {
  id

  constructor({ id, position, rotationY }) {
    this.id = id
    Object.assign(this, Transform(position, rotationY))
  }

  static fromObject(object) {
    return new Temple({
      id: object.id,
      position: new Vector3(
        object.position.x,
        object.position.y,
        object.position.z
      ),
      rotationY: object.rotationY,
    })
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
