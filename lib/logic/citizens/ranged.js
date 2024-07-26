import { Damageable } from '../behaviours/damageable'

export class Ranged {
  id

  constructor({ id, health }) {
    this.id = id
    Object.assign(this, Damageable(health))
  }

  static fromObject = (object) => {
    return new Ranged({
      id: object.id,
      health: object.health,
    })
  }

  toObject() {
    return {
      type: this.constructor.name,
      id: this.id,
      health: this.health,
    }
  }
}
