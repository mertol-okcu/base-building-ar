import { getSession } from '../store/session_store'
import { BaseWorld } from '../three_scene/base_world'
import { goToMapPage } from './router'

export const initBasePage = () => {
  const session = getSession()
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

  document.getElementById('map-button').addEventListener('click', (event) => {
    window.cancelAnimationFrame(animationFrameId)
    animationFrameId = null
    goToMapPage()
  })
}
