import { Vector3 } from 'three'
import { BaseState } from './base_state'
import { Temple } from '../buildings/temple'
import { Chief } from '../citizens/chief'
import { Worker } from '../citizens/worker'
import { Field } from '../buildings/field'
import { buildingHealts } from '../buildings/building_healts'
import { House } from '../buildings/house'
import { citizenHealths } from '../citizens/citizen_healths'
import { createId } from '../../functions/id_generator'

export const createDefaultBase = (id, location) => {
  const temple = new Temple({
    id: createId(),
    position: new Vector3(0, 0, 0),
    rotationY: 0,
  })

  const citizens = {}

  const chief = new Chief({ id: createId(), position: new Vector3(0, 0, 2) })
  citizens[chief.id] = chief
  const worker1 = new Worker({
    id: createId(),
    health: citizenHealths.worker,
    position: new Vector3(2, 0, 3),
  })
  citizens[worker1.id] = worker1
  const worker2 = new Worker({
    id: createId(),
    health: citizenHealths.worker,
    position: new Vector3(-2, 0, 3),
  })
  citizens[worker2.id] = worker2

  const buildings = {}

  const field = new Field({
    id: createId(),
    health: buildingHealts.field,
    capacity: 4,
    position: new Vector3(2, 0, -3),
    rotationY: 0,
  })
  buildings[field.id] = field

  const house = new House({
    id: createId(),
    health: buildingHealts.house,
    position: new Vector3(-2, 0, -3),
    rotationY: Math.PI * 0.5,
  })
  buildings[house.id] = house

  return new BaseState({
    id: id,
    location: location,
    temple: temple,
    citizens: citizens,
    buildings: buildings,
    resources: [],
    tools: [],
  })
}
