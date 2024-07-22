<<<<<<< HEAD
import { getSession } from '../store/session_store'
=======
import { liveLocation } from '../location/live_location'
import { createDefaultBase } from '../logic/session/default_base'
import { SessionController } from '../logic/session/session_controller'
>>>>>>> origin/main
import { BaseWorld } from '../three_scene/base_world'
import { goToMapPage } from './router'

export const initBasePage = () => {
<<<<<<< HEAD
  const session = getSession()
=======
  const session = new SessionController()
  const defaultBase = createDefaultBase(liveLocation)
  session.deployBase(defaultBase)

>>>>>>> origin/main
  const canvas = document.querySelector('canvas')
  const sizes = { width: window.innerWidth, height: window.innerHeight }
  const world = new BaseWorld(canvas, sizes, session.base)

  window.addEventListener('resize', function () {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    world.threeScene.resize(sizes)
  })

  let animationFrameId

  function loop() {
    world.update()
    animationFrameId = window.requestAnimationFrame(loop)
  }
  loop()

<<<<<<< HEAD
  document.getElementById('map-button').addEventListener('click', (event) => {
    window.cancelAnimationFrame(animationFrameId)
    animationFrameId = null
    goToMapPage()
  })
=======
  document
    .getElementById('close-base-button')
    .addEventListener('click', (event) => {
      window.cancelAnimationFrame(animationFrameId)
      animationFrameId = null
      goToMapPage()
    })
>>>>>>> origin/main
}
