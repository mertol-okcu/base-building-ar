import { Vector3, MathUtils, PerspectiveCamera } from 'three'

export class MovingCamera extends PerspectiveCamera {
  constructor({
    canvas,
    position,
    mouseSenstivity,
    speed,
    aspect,
    fov = 45,
    near = 0.05,
    far = 500,
  }) {
    super(fov, aspect, near, far)
    this.canvas = canvas
    this.position.set(position.x, position.y, position.z)
    this.lookDir = new Vector3(0, 0, -1)
    this.sensitivity = mouseSenstivity
    this.speed = speed
    this.yaw = -90.0
    this.pitch = 0.0
    this.cameraUp = new Vector3(0, 1, 0)
    this.moveForward = false
    this.moveBack = false
    this.moveLeft = false
    this.moveRight = false
    this.moveUp = false
    this.moveDown = false
    this.initListeners()
  }

  update(deltaInSeconds) {
    const moveSpeed = this.speed * deltaInSeconds
    const forward = this.lookDir.clone()
    const deltaMove = new Vector3(0, 0, 0)

    if (this.moveForward) {
      const extra = forward.clone().multiplyScalar(moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }
    if (this.moveBack) {
      const extra = forward.clone().multiplyScalar(-moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }
    if (this.moveLeft) {
      const cameraRight = new Vector3()
        .crossVectors(forward, this.cameraUp)
        .normalize()
      const extra = cameraRight.clone().multiplyScalar(-moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }
    if (this.moveRight) {
      const cameraRight = new Vector3()
        .crossVectors(forward, this.cameraUp)
        .normalize()
      const extra = cameraRight.clone().multiplyScalar(moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }
    if (this.moveUp) {
      const extra = this.cameraUp.clone().multiplyScalar(moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }
    if (this.moveDown) {
      const extra = this.cameraUp.clone().multiplyScalar(-moveSpeed)
      deltaMove.addVectors(deltaMove, extra)
    }

    this.position.addVectors(this.position, deltaMove)
    const front = new Vector3().addVectors(this.position, forward)
    this.lookAt(front)
  }

  mouseMove = (event) => {
    if (document.pointerLockElement == null) {
      return
    }

    const xoffset = event.movementX * this.sensitivity
    const yoffset = event.movementY * this.sensitivity

    this.yaw += xoffset
    this.pitch -= yoffset

    if (this.pitch > 89.0) this.pitch = 89.0
    if (this.pitch < -89.0) this.pitch = -89.0

    this.lookDir.x =
      Math.cos(MathUtils.degToRad(this.yaw)) *
      Math.cos(MathUtils.degToRad(this.pitch))

    this.lookDir.y = Math.sin(MathUtils.degToRad(this.pitch))

    this.lookDir.z =
      Math.sin(MathUtils.degToRad(this.yaw)) *
      Math.cos(MathUtils.degToRad(this.pitch))

    this.lookDir.normalize()
  }

  initListeners() {
    this.canvas.requestPointerLock =
      this.canvas.requestPointerLock ||
      this.canvas.mozRequestPointerLock ||
      this.canvas.webkitRequestPointerLock ||
      this.canvas.msRequestPointerLock
    document.exitPointerLock =
      document.exitPointerLock ||
      document.mozExitPointerLock ||
      document.webkitExitPointerLock ||
      document.msExitPointerLock

    this.canvas.requestPointerLock()
    document.addEventListener('click', this.click)
    document.addEventListener('mousemove', this.mouseMove)
    document.addEventListener('keydown', this.keyDown)
    document.addEventListener('keyup', this.keyUp)
  }

  click = (event) => {
    this.canvas.requestPointerLock()
  }

  keyDown = (event) => {
    switch (event.code) {
      case 'KeyW':
        this.moveForward = true
        break
      case 'KeyS':
        this.moveBack = true
        break
      case 'KeyA':
        this.moveLeft = true
        break
      case 'KeyD':
        this.moveRight = true
        break
      case 'ShiftLeft':
        this.moveUp = true
        break
      case 'ControlLeft':
        this.moveDown = true
        break
      case 'Escape':
        document.exitPointerLock()

        break
    }
  }

  keyUp = (event) => {
    switch (event.code) {
      case 'KeyW':
        this.moveForward = false
        break
      case 'KeyS':
        this.moveBack = false
        break
      case 'KeyA':
        this.moveLeft = false
        break
      case 'KeyD':
        this.moveRight = false
        break
      case 'ShiftLeft':
        this.moveUp = false
        break
      case 'ControlLeft':
        this.moveDown = false
        break
    }
  }

  dispose() {
    document.exitPointerLock()
    document.removeEventListener('click', this.click)
    document.removeEventListener('mousemove', this.mouseMove)
    document.removeEventListener('keydown', this.keyDown)
    document.removeEventListener('keyup', this.keyUp)
  }
}
