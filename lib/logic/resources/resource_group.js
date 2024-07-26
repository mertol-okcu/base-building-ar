export class ResourceGroup {
  coalAmount
  stoneAmount
  woodAmount
  ironAmount
  rareItems
  steelAmount
  foodAmount

  constructor({
    coalAmount = 0,
    stoneAmount = 0,
    woodAmount = 0,
    ironAmount = 0,
    rareItems = 0,
    steelAmount = 0,
    foodAmount = 0,
  } = {}) {
    this.coalAmount = coalAmount
    this.stoneAmount = stoneAmount
    this.woodAmount = woodAmount
    this.ironAmount = ironAmount
    this.rareItems = rareItems
    this.steelAmount = steelAmount
    this.foodAmount = foodAmount
  }

  toObject() {
    return {
      coalAmount: this.coalAmount,
      stoneAmount: this.stoneAmount,
      woodAmount: this.woodAmount,
      ironAmount: this.ironAmount,
      rareItems: this.rareItems,
      steelAmount: this.steelAmount,
      foodAmount: this.foodAmount,
    }
  }

  static fromObject(object) {
    return new ResourceGroup({
      coalAmount: object.coalAmount,
      stoneAmount: object.stoneAmount,
      woodAmount: object.woodAmount,
      ironAmount: object.ironAmount,
      rareItems: object.rareItems,
      steelAmount: object.steelAmount,
      foodAmount: object.foodAmount,
    })
  }
}
