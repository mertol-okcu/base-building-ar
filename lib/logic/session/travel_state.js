export class TravelState {
  id
  citizens
  resourceGroup
  tools

  constructor(id) {
    this.id = id
  }

  toObject() {
    return {
      id: this.id,
      citizens: objectMap(this.citizens, (c) => c.toObject()),
      resourceGroup: this.resourceGroup.toObject(),
      tools: objectMap(this.tools, (t) => t.toObject()),
    }
  }
}
