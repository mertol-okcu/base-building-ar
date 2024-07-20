import { BaseState } from "./base_state";
import { Temple } from "../buildings/temple";
import { Vec3 } from "../models/vec3";
import { Chief } from "../citizens/chief";
import { Worker } from "../citizens/worker";
import { Field } from "../buildings/field";
import { buildingHealts } from "../constants/building_healts";
import { House } from "../buildings/house";
import { createId } from "../functions/id_generator";
import { citizenHealths } from "../constants/citizen_healths";

export const createDefaultBase = (location) => {
  const temple = new Temple({
    id: createId(),
    position: new Vec3(0, 0, 0),
    rotationY: 0,
  });

  const citizens = {};

  const chief = new Chief({ id: createId(), position: new Vec3(0, 0, 5) });
  citizens[chief.id] = chief;
  const worker1 = new Worker({
    id: createId(),
    health: citizenHealths.worker,
    position: new Vec3(2, 0, 7),
  });
  citizens[worker1.id] = worker1;
  const worker2 = new Worker({
    id: createId(),
    health: citizenHealths.worker,
    position: new Vec3(-2, 0, 7),
  });
  citizens[worker2.id] = worker2;

  const buildings = {};

  const field = new Field({
    id: createId(),
    health: buildingHealts.field,
    capacity: 4,
    position: new Vec3(6, 0, 2),
    rotationY: 0,
  });
  buildings[field.id] = field;

  const house = new House({
    id: createId(),
    health: buildingHealts.house,
    position: new Vec3(-7, 0, -2),
    rotationY: Math.PI * 1.2,
  });
  buildings[house.id] = house;

  return new BaseState({
    location: location,
    temple: temple,
    citizens: citizens,
    buildings: buildings,
    resources: [],
    tools: [],
  });
};
