import { Damageable } from '../behaviours/damageable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_constants'
import { vec3ToObject } from '../../functions/object_functions'
import { Vector3 } from 'three'

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

  static fromObject = (object) => {
    return new DefenceTower({
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
      position: vec3ToObject(this.position),
      rotationY: this.rotationY,
    }
  }
}
