import { Vector3 } from 'three'
import { objectMap } from '../../functions/object_functions'
import { Temple } from '../buildings/temple'
import { LocationModel } from '../../location/location_model'
import { Chief } from '../citizens/chief'
import { Doctor } from '../citizens/doctor'
import { Melee } from '../citizens/melee'
import { Ranged } from '../citizens/ranged'
import { Trainer } from '../citizens/trainer'
import { Worker } from '../citizens/worker'
import { Barrack } from '../buildings/barrack'
import { DefenceTower } from '../buildings/defence_tower'
import { Field } from '../buildings/field'
import { Hospital } from '../buildings/hospital'
import { House } from '../buildings/house'
import { ResourceGroup } from '../resources/resource_group'
import { Cannon } from '../tools/cannon'
import { Ladder } from '../tools/ladder'

export class BaseState {
  id
  location
  temple
  citizens
  buildings
  resources
  tools

  constructor({ id, location, temple, citizens, buildings, resources, tools }) {
    this.id = id
    this.location = location
    this.temple = temple
    this.citizens = citizens
    this.buildings = buildings
    this.resources = resources
    this.tools = tools
  }

  static fromObject(object) {
    return new BaseState({
      id: object.id,
      location: new LocationModel(object.location.lat, object.location.long),
      temple: Temple.fromObject(object.temple),
      citizens: this.#citizensFromObject(object.citizens), // ToDo Uğur: implement please
      buildings: this.#buildingsFromObject(object.buildings), // ToDo Uğur: implement please
      resources: new ResourceGroup({
        coalAmount: object.resources.coalAmount,
        stoneAmount: object.resources.stoneAmount,
        woodAmount: object.resources.woodAmount,
        ironAmount: object.resources.ironAmount,
        rareItems: object.resources.rareItems,
        steelAmount: object.resources.steelAmount,
        foodAmount: object.resources.foodAmount,
      }), // ToDo Uğur: implement please
      tools: this.#toolsFromObject(object.tools), // ToDo Uğur: implement please
    })
  }

  toObject() {
    return {
      id: this.id,
      location: this.location.toObject(),
      temple: this.temple.toObject(),
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      buildings: objectMap(this.buildings, (b) => b.toObject()),
      resources: objectMap(this.resources, (r) => r.toObject()),
      tools: objectMap(this.tools, (t) => t.toObject()),
    }
  }

  static #citizensFromObject = (citizensObject) => {
    const citizens = {}
    const classMap = {
      Chief,
      Doctor,
      Melee,
      Ranged,
      Trainer,
      Worker,
    }

    for (const citizen of citizensObject) {
      const Class = classMap[citizen.type]
      if (Class) {
        const instance = Class.fromObject(citizen)
        citizens[instance.id] = instance
      }
    }
    return citizens
  }

  static #buildingsFromObject = (buildingsObject) => {
    const buildings = {}
    const classMap = {
      Barrack,
      DefenceTower,
      Field,
      Hospital,
      House,
    }

    for (const building of buildingsObject) {
      const Class = classMap[building.type]
      if (Class) {
        const instance = Class.fromObject(building)
        buildings[instance.id] = instance
      }
    }

    return buildings
  }

  static #toolsFromObject = (toolsObject) => {
    const tools = {}
    const classMap = {
      Cannon,
      Ladder,
    }

    for (const tool of toolsObject) {
      const Class = classMap[tool.type]
      if (Class) {
        const instance = Class.fromObject(tool)
        tools[instance.id] = instance
      }
    }
    return tools
  }
}
