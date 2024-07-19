import { objectMap } from "../functions/object_functions";

export const createBaseStateFromDatabase = (data) => {};

export class BaseState {
  location
  temple;
  citizens;
  buildings;
  resources;
  tools;

  constructor({ location,temple, citizens, buildings, resources, tools }) {
    this.location = location;
    this.temple = temple;
    this.citizens = citizens;
    this.buildings = buildings;
    this.resources = resources;
    this.tools = tools;
  }

  toObject() {
    return {
      location:this.location.toObject(),
      temple: this.temple.toObject(),
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      buildings: objectMap(this.buildings, (b) => b.toObject()),
      resources: objectMap(this.resources, (r) => r.toObject()),
      tools: objectMap(this.tools, (t) => t.toObject()),
    };
  }
}
