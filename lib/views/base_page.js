import { Mesh, PerspectiveCamera, Vector3, WebGLRenderer } from 'three'
import { getSession } from '../stores/session_store'

import { BaseScene } from '../three_scenes/base/base_scene'
import { MovingCamera } from '../three_scenes/moving_camera'
import { createMapPage } from './router'
import { writeBaseToDb } from '../database/base_db_service'
import { AnimController } from '../three_scenes/base/anim_controller'

export const initBasePage = () => {
  const canvas = document.querySelector('canvas')
  if (canvas == null) {
    throw Error('There is no canvas in the active html.')
  }

  const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
  renderer.setPixelRatio(2)
  renderer.setSize(window.innerWidth, window.innerHeight)

  const camera = new MovingCamera({
    canvas: canvas,
    position: new Vector3(0, 2, 3),
    mouseSenstivity: 0.05,
    speed: 5,
    aspect: window.innerWidth / window.innerHeight,
    fov: 70,
  })

  const base = getSession().base
  const scene = new BaseScene(base)
  const animController = new AnimController()

  let animationFrameId
  let prevTimeInSeconds = 0
  const loop = (time) => {
    animationFrameId = window.requestAnimationFrame(loop)
    const timeInSeconds = time * 0.001
    const deltaInSeconds = timeInSeconds - prevTimeInSeconds
    prevTimeInSeconds = timeInSeconds

    camera.update(deltaInSeconds)
    animController.update(deltaInSeconds)
    scene.update(deltaInSeconds)

    renderer.render(scene, camera)
  }
  loop(0)

  /// To Erdem: This is to test animation play but mesh doesn't seem to have one
  window.addEventListener('keypress', (event) => {
    const chief = Object.values(base.citizens).find(
      (c) => c.constructor.name === 'Chief'
    )
    if (chief) {
      const chiefMesh = scene.getObjectByName(chief.id)
      if (chiefMesh.length === 0) {
        console.error('Chief mesh cannot be found')
      } else {
        animController.startAnimation(chiefMesh, 'Run')
      }
    }
  })

  const resize = (event) => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resize)

  document.getElementById('back-button').addEventListener('click', (event) => {
    writeBaseToDb(base.toObject())
    window.removeEventListener('resize', resize)
    createMapPage()
    window.cancelAnimationFrame(animationFrameId)
    camera.dispose(canvas)
  })
}
