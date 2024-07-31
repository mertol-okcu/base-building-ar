import { Damageable } from '../behaviours/damageable'
import { Buildable } from '../behaviours/buildable'
import { Transform } from '../behaviours/transform'
import { buildingHealts } from './building_constants'
import { vec3ToObject } from '../../functions/object_functions'
import { Vector3 } from 'three'

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

  static fromObject = (object) => {
    return new Field({
      id: object.id,
      health: object.health,
      capacity: object.capacity,
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
      capacity: this.capacity,
      health: this.health,
      position: vec3ToObject(this.position),
      rotationY: this.rotationY,
    }
  }
}
