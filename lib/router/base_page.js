import { getSession } from '../store/session_store'

import { BaseWorld } from '../three_scene/base_world'
import { createMapPage } from './router'

export const initBasePage = () => {
  const canvas = document.querySelector('canvas')
  const sizes = { width: window.innerWidth, height: window.innerHeight }
  const world = new BaseWorld(canvas, sizes, getSession().base)

  const resizeHandler = () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    world.threeScene.resize(sizes)
  }

  window.addEventListener('resize', resizeHandler)

  let animationFrameId

  function loop() {
    world.update()
    animationFrameId = window.requestAnimationFrame(loop)
  }
  loop()

  document.getElementById('back-button').addEventListener('click', (event) => {
    window.cancelAnimationFrame(animationFrameId)
    animationFrameId = null
    window.removeEventListener('resize', resizeHandler)
    createMapPage()
  })
}
