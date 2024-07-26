import { Vector3 } from 'three'
import { objectMap } from '../../functions/object_functions'
import { Temple } from '../buildings/temple'
import { LocationModel } from '../../location/location_model'

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
      citizens: object.citizens, // ToDo Uğur: implement please
      buildings: object.buildings, // ToDo Uğur: implement please
      resources: object.resources, // ToDo Uğur: implement please
      tools: object.tools, // ToDo Uğur: implement please
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
}
