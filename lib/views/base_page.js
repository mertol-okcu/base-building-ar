import { Vector3, WebGLRenderer } from 'three'
import { getSession } from '../stores/session_store'

import { BaseScene } from '../three_scenes/base/base_scene'
import { MovingCamera } from '../three_scenes/moving_camera'
import { createMapPage } from './router'
import { writeBaseToDb } from '../database/base_db_service'
import { workerAnimNames } from '../constants/anim_names'

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
  
  const playWorker2 = () => {
    const citizensArray = Object.values(base.citizens)
    const worker2 = citizensArray[citizensArray.length - 1]

    if (worker2 == null) {
      return
    }
    const worker2Mesh = scene.getObjectByName(worker2.id)
    if (worker2Mesh == null) {
      return
    }
    scene.animController.startAnimation(worker2Mesh, workerAnimNames.pickUp)
  }

  const stopWorker2 = () => {
    const citizensArray = Object.values(base.citizens)
    const worker2 = citizensArray[citizensArray.length - 1]

    if (worker2 == null) {
      return
    }
    const worker2Mesh = scene.getObjectByName(worker2.id)
    if (worker2Mesh == null) {
      return
    }
    scene.animController.stopAnimation(worker2Mesh, workerAnimNames.pickUp)
  }

  window.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
      stopWorker2()
    } else {
      playWorker2()
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
