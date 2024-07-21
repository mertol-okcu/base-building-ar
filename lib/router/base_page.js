import { liveLocation } from '../location/live_location'
import { createDefaultBase } from '../logic/session/default_base'
import { SessionController } from '../logic/session/session_controller'
import { BaseWorld } from '../three_scene/base_world'

export const initBasePage = () => {
  const session = new SessionController()
  const defaultBase = createDefaultBase(liveLocation)
  session.deployBase(defaultBase)

  const canvas = document.querySelector('canvas')
  const sizes = { width: window.innerWidth, height: window.innerHeight }
  const world = new BaseWorld(canvas, sizes, session.base)

  window.addEventListener('resize', function () {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    world.threeScene.resize(sizes)
  })

  function loop() {
    world.update()
    window.requestAnimationFrame(loop)
  }
  loop()
}
