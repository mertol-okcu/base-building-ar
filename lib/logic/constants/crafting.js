import { CraftNeeds } from '../craft_system/craft_needs.js'

export const buildingItems = {
  house: new CraftNeeds({ wood: 10, stone: 20 }, 300),
  defenceTower: { wood: 10, stone: 50 },
  field: { wood: 5, food: 50 },
  hospital: { wood: 20, stone: 60 },
  barrack: { wood: 50, stone: 10 },
}

export const resourceItems = {
  steel: { iron: 2, coal: 1 },
}

export const toolItems = {
  cannon: { steel: 10, wood: 5 },
  ladder: { wood: 10 },
}

export const trainingItems = {
  ranged: { worker: 1, wood: 10, iron: 5 },
  melee: { worker: 1, steel: 5, iron: 10 },
  doctor: { worker: 1, wood: 10, steel: 5, iron: 5, coal: 20 },
}

// --------

export const buildingTimes = {
  barrack: 360,
  Hospital: 1440,
  field: 120,
  defenceTower: 360,
}

export const resourceTimes = {
  steel: 0.16,
}

export const toolTimes = {
  cannon: 180,
  ladder: 30,
}

export const trainingTimes = {
  doctor: 120,
  ranged: 20,
  melee: 10,
}
