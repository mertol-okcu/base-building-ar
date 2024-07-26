export class TravelState {
  citizens
  resourceGroup
  tools

  constructor() {}

  toObject() {
    return {
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      resourceGroup: this.resourceGroup.toObject(),
      tools: objectMap(this.tools, (t) => t.toObject()),
    }
  }
}
