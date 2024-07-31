import { objectMap } from '../../functions/object_functions'
import { Temple } from '../buildings/temple'
import { LocationModel } from '../../location/location_model'
import { ResourceGroup } from '../resources/resource_group'
import { baseTypeClasses } from './base_constants'


export class BaseState {
  id
  location
  temple
  citizens
  buildings
  resourceGroup
  tools

  constructor({
    id,
    location,
    temple,
    citizens,
    buildings,
    resourceGroup,
    tools,
  }) {
    this.id = id
    this.location = location
    this.temple = temple
    this.citizens = citizens
    this.buildings = buildings
    this.resourceGroup = resourceGroup
    this.tools = tools
  }

  static fromObject(object) {
    return new BaseState({
      id: object.id,
      location: new LocationModel(object.location.lat, object.location.long),
      temple: Temple.fromObject(object.temple),
      citizens:
        object.citizens == null ? {} : this.#modelsFromObject(object.citizens),
      buildings:
        object.buildings == null
          ? {}
          : this.#modelsFromObject(object.buildings),
      resourceGroup: ResourceGroup.fromObject(object.resourceGroup),
      tools: object.tools == null ? {} : this.#modelsFromObject(object.tools),
    })
  }

  toObject() {
    return {
      id: this.id,
      location: this.location.toObject(),
      temple: this.temple.toObject(),
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      buildings: objectMap(this.buildings, (b) => b.toObject()),
      resourceGroup: this.resourceGroup.toObject(),
      tools: objectMap(this.tools, (t) => t.toObject()),
    }
  }

  static #modelsFromObject = (parentObject) => {
    return objectMap(parentObject, (object) => {
      const Class = baseTypeClasses(object.type)
      return Class.fromObject(object)
    })
  }
}
