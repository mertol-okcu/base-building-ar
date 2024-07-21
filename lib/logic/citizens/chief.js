import { Mover } from '../behaviours/mover'

export class Chief {
  id

  constructor({ id, position }) {
    this.id = id
    Object.assign(this, Mover(position))
  }

  toObject() {
    return {
      id: this.id,
      position: this.position.toObject(),
      rotationY: this.rotationY,
    }
  }
}
