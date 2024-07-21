export class Vec3 {
  x
  y
  z

  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
    }
  }
}
