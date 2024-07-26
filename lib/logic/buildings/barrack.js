import { Buildable } from '../behaviours/buildable'
import { Damageable } from '../behaviours/damageable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_constants'
import { vec3ToObject } from '../../functions/object_functions'
import { Vector3 } from 'three'

export class Barrack {
  id

  constructor(id, health, position, rotationY) {
    this.id = id
    Object.assign(
      this,
      Damageable(health),
      Buildable(health, buildingHealts.barrack),
      Transform(position, rotationY)
    )
  }
  static fromObject = (object) => {
    return new Barrack(
      object.id,
      object.health,
      new Vector3(object.position.x, object.position.y, object.position.z),
      object.rotationY
    )
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
