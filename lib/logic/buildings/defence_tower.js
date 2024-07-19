import { Damageable } from "../behaviours/damageable";
import { Transform } from "../behaviours/transform";
import { buildingHealts } from "../constants/building_healts";

export class DefenceTower {
  id;

  constructor({ id, health, position }) {
    this.id = id;
    Object.assign(
      this,
      Damageable(health),
      Buildable(health, buildingHealts.defenceTower),
      Transform(position, rotationY)
    );
  }

  toObject() {
    return {
      id: this.id,
      health: this.health,
      position: this.position.toObject(),
      rotationY: this.rotationY,
    };
  }
}
