import { Damageable } from '../behaviours/damageable'
import { Buildable } from '../behaviours/buildable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_healts'

export class Field {
  id
  capacity

  constructor({ id, health, capacity, position, rotationY }) {
    this.id = id
    this.capacity = capacity
    Object.assign(
      this,
      Damageable(health),
      Buildable(health, buildingHealts.field),
      Transform(position, rotationY)
    )
  }

  toObject() {
    return {
      id: this.id,
      capacity: this.capacity,
      health: this.health,
      position: this.position.toObject(),
      rotationY: this.rotationY,
    }
  }
}
