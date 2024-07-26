import { Damageable } from '../behaviours/damageable'
import { Buildable } from '../behaviours/buildable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_healts'
import { vec3Object } from '../../functions/object_functions'

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
      type: this.constructor.name,
      id: this.id,
      capacity: this.capacity,
      health: this.health,
      position: vec3Object(this.position),
      rotationY: this.rotationY,
    }
  }
}
