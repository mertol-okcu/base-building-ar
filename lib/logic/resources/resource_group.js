export class ResourceGroup {
  coalAmount;
  stoneAmount;
  woodAmount;
  ironAmount;
  rareItems;
  steelAmount;
  foodAmount;

  constructor({
    coalAmount,
    stoneAmount,
    woodAmount,
    ironAmount,
    rareItems,
    steelAmount,
    foodAmount,
  }) {
    this.coalAmount = coalAmount;
    this.stoneAmount = stoneAmount;
    this.woodAmount = woodAmount;
    this.ironAmount = ironAmount;
    this.rareItems = rareItems;
    this.steelAmount = steelAmount;
    this.foodAmount = foodAmount;
  }
}
