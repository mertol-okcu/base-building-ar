import { Damageable } from '../behaviours/damageable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_healts'
import { vec3Object } from '../../functions/object_functions'

export class DefenceTower {
  id

  constructor({ id, health, position }) {
    this.id = id
    Object.assign(
      this,
      Damageable(health),
      Buildable(health, buildingHealts.defenceTower),
      Transform(position, rotationY)
    )
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
