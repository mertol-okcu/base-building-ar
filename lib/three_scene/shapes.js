import {
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  CapsuleGeometry,
  BoxGeometry,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Doctor } from '../logic/citizens/doctor'
import { Worker } from '../logic/citizens/worker'
import { Trainer } from '../logic/citizens/trainer'
import { Melee } from '../logic/citizens/melee'
import { Ranged } from '../logic/citizens/ranged'
import { Chief } from '../logic/citizens/chief'
import { Temple } from '../logic/buildings/temple'
import { Hospital } from '../logic/buildings/hospital'
import { House } from '../logic/buildings/house'
import { Barrack } from '../logic/buildings/barrack'
import { Field } from '../logic/buildings/field'
import { DefenceTower } from '../logic/buildings/defence_tower'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export function createSphereMesh(radius, color) {
  const geometry = new SphereGeometry(radius, 64, 64)
  const material = new MeshStandardMaterial({ color: color })
  const mesh = new Mesh(geometry, material)
  return mesh
}

export function createBuildingMesh(building) {\
  const loader = new GLTFLoader;
  

  if (building instanceof Temple) return createBoxMesh(2, 1, 2, '#ffffff')
  if (building instanceof Hospital) return createBoxMesh(2, 2, 1, '#00ff00')
  if (building instanceof House) return createBoxMesh(1, 1, 1, '#0000ff')
  if (building instanceof Barrack) return createBoxMesh(2, 1, 1, '#ff0000')
  if (building instanceof Field) return createBoxMesh(1, 0.2, 1, '#ffff00')
  if (building instanceof DefenceTower) return createBoxMesh(1, 3, 1, '#00ffff')
  return createBoxMesh(1, 1, 1, '#ff00ff')
}

export function createCitizenMesh(citizen) {
  if (citizen instanceof Chief) return createBoxMesh(2, 1, 2, '#ffffff')
  if (citizen instanceof Doctor) return createBoxMesh(2, 2, 1, '#00ff00')
  if (citizen instanceof Worker) return createBoxMesh(1, 1, 1, '#0000ff')
  if (citizen instanceof Trainer) return createBoxMesh(2, 1, 1, '#ff0000')
  if (citizen instanceof Melee) return createBoxMesh(1, 0.2, 1, '#ffff00')
  if (citizen instanceof Ranged) return createBoxMesh(1, 3, 1, '#00ffff')
  return createCapsuleMesh(1, 1, 1, '#ff00ff')
}

export function createCapsuleMesh(length, radius, color) {
  const geometry = new CapsuleGeometry(radius, length, 64, 64)
  const material = new MeshStandardMaterial({ color: color })
  const mesh = new Mesh(geometry, material)
  return mesh
}

export function createBoxMesh(width, height, depth, color) {
  const geometry = new BoxGeometry(width, height, depth, 1, 1, 2)
  const material = new MeshStandardMaterial({ color: color })
  const mesh = new Mesh(geometry, material)
  return mesh
}
