import { createBoxMesh, createCapsuleMesh } from "./shapes";
import { getBuildingColor, getCitizenColor } from "./get_colors";
import { ThreeScene } from "./three_scene";

export class BaseWorld {
  threeScene;
  base;

  constructor(canvas, size, base) {
    this.threeScene = new ThreeScene(canvas, size);
    this.base = base;

    for (const citizen of base.citizens.values) {
      this.addCitizen(citizen);
    }

    for (const building of base.buildings.values) {
      this.addBuilding(building);
    }
  }

  update() {
    for (const citizen of base.citizens) {
      const mesh = this.threeScene.getObjectById(citizen.id);
      const pos = citizen.position;
      mesh.position.set(pos.x, pos.y, pos.z);
    }

    this.threeScene.update();
  }

  addCitizen(citizen) {
    const color = getCitizenColor(citizen);
    const capsule = createCapsuleMesh(1.5, 1, color);

    const pos = citizen.position;
    capsule.position.set(pos.x, pos.y, pos.z);
    capsule.rotation.y = citizen.rotationY;
    capsule.id = citizen.id;

    this.threeScene.add(capsule);
  }

  addBuilding(building) {
    const color = getBuildingColor(building);
    const box = createBoxMesh(1, 1.5, 1, color);

    const pos = building.position;
    box.position.set(pos.x, pos.y, pos.z);
    box.rotation.y = building.rotationY;
    box.id = building.id;

    this.threeScene.add(box);
  }
}
