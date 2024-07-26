import { Damageable } from '../behaviours/damageable'
import { Mover } from '../behaviours/mover'
import { vec3Object } from '../../functions/object_functions'

export class Worker {
  id

  constructor({ id, health, position }) {
    this.id = id
    Object.assign(this, Damageable(health))
    Object.assign(this, Mover(position))
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
