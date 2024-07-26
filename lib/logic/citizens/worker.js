import { Damageable } from '../behaviours/damageable'
import { Mover } from '../behaviours/mover'
import { vec3Object } from '../../functions/object_functions'
import { Vector3 } from 'three'

export class Worker {
  id

  constructor({ id, health, position }) {
    this.id = id
    Object.assign(this, Damageable(health))
    Object.assign(this, Mover(position))
  }

  static fromObject = (object) => {
    return new Worker({
      id: object.id,
      health: object.health,
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
      health: this.health,
      position: vec3Object(this.position),
      rotationY: this.rotationY,
    }
  }
}
