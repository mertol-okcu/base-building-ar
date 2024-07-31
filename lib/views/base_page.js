import { Vector3, WebGLRenderer } from 'three'
import { getSession } from '../stores/session_store'

import { BaseScene } from '../three_scenes/base/base_scene'
import { MovingCamera } from '../three_scenes/moving_camera'
import { createMapPage } from './router'
import { writeBaseToDb } from '../database/base_db_service'
import { chiefAnimNames } from '../constants/anim_names'

export const initBasePage = () => {
  const canvas = document.querySelector('canvas')
  if (canvas == null) {
    throw Error('There is no canvas in the active html.')
  }

  const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
  renderer.setPixelRatio(2)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

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

  let animationFrameId
  let prevTimeInSeconds = 0
  const loop = (time) => {
    animationFrameId = window.requestAnimationFrame(loop)
    const timeInSeconds = time * 0.001
    const deltaInSeconds = timeInSeconds - prevTimeInSeconds
    prevTimeInSeconds = timeInSeconds

    camera.update(deltaInSeconds)
    scene.update(deltaInSeconds)

    renderer.render(scene, camera)
  }
  loop(0)

  window.addEventListener('keypress', (event) => {
    let chiefMesh

    const chief = Object.values(base.citizens).find(
      (c) => c.constructor.name === 'Chief'
    )
    if (chief) {
      chiefMesh = scene.getObjectByName(chief.id)
    }
    if (chiefMesh) {
      if (event.code === 'KeyP') {
        scene.animController.startAnimation(chiefMesh, chiefAnimNames.pickUp)
      } else if (event.code === 'KeyO') {
        scene.animController.stopAnimation(chiefMesh, chiefAnimNames.pickUp)
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
