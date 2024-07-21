import { Damageable } from '../behaviours/damageable'

export class Ranged {
  id

  constructor({ id, health }) {
    this.id = id
    Object.assign(this, Damageable(health))
  }

  toObject() {
    return {
      id: this.id,
      health: this.health,
    }
  }
}
