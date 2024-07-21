export class TravelState {
  citizens
  resources
  tools

  constructor() {}

  toObject() {
    return {
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      resources: objectMap(this.resources, (r) => r.toObject()),
      tools: objectMap(this.tools, (t) => t.toObject()),
    }
  }
}
