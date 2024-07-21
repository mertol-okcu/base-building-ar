export const Mover = (position) => {
  return {
    position: position,
    rotationY: 0,
    target: null,
    setTarget(newTarget) {
      this.target = newTarget
    },
  }
}
