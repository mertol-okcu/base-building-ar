import { Damageable } from '../behaviours/damageable'
import { Mover } from '../behaviours/mover'

export class Worker {
  id

  constructor({ id, health, position }) {
    this.id = id
    Object.assign(this, Damageable(health))
    Object.assign(this, Mover(position))
  }

  toObject() {
    return {
      id: this.id,
      health: this.health,
      position: this.position.toObject(),
      rotationY: this.rotationY,
    }
  }
}
