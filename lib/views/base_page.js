import { Mesh, PerspectiveCamera, Vector3, WebGLRenderer } from 'three'
import { getSession } from '../store/session_store'

import { BaseScene } from '../three_scenes/base/base_scene'
import { MovingCamera } from '../three_scenes/moving_camera'
import { createMapPage } from './router'
import { readBaseFromDb, writeBaseToDb } from '../database/base_db_service'
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
    position: new Vector3(0, 1, 15),
    mouseSenstivity: 0.05,
    speed: 5,
    aspect: window.innerWidth / window.innerHeight,
    fov: 70,
  })

  const base = getSession().base
  const scene = new BaseScene(base)
  const animController = new AnimController()

  const chiefs = Object.values(base.citizens).filter(
    (c) => c.constructor.name === 'Chief'
  )
  if (chiefs.length > 0) {
    const chief = chiefs[0]
    const chiefMesh = scene.getObjectByName(chief.id)
    if (chiefMesh == null) {
      console.error('Chief mesh cannot be found')
    } else {
      animController.startAnimation(chiefMesh, 'Run')
    }
  }

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

  const resize = (event) => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resize)

  document.getElementById('back-button').addEventListener('click', (event) => {
    testWriteRead(base)
    window.removeEventListener('resize', resize)
    createMapPage()
    window.cancelAnimationFrame(animationFrameId)
    camera.dispose(canvas)
  })
}

const testWriteRead = async (base) => {
  //save base to db here
  try {
    await writeBaseToDb(base.toObject())
    const response = await readBaseFromDb(base.id)
    console.log(response)
  } catch (error) {
    throw error
  }
}
