import { Buildable } from '../behaviours/buildable'
import { Damageable } from '../behaviours/damageable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_healts'

export class Hospital {
  id

  constructor({ id, health, position, rotationY }) {
    this.id = id
    Object.assign(
      this,
      Damageable(health),
      Buildable(health, buildingHealts.hospital),
      Transform(position, rotationY)
    )
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
