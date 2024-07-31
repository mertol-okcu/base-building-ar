import { Barrack } from '../buildings/barrack'
import { DefenceTower } from '../buildings/defence_tower'
import { Field } from '../buildings/field'
import { Hospital } from '../buildings/hospital'
import { House } from '../buildings/house'
import { Chief } from '../citizens/chief'
import { Doctor } from '../citizens/doctor'
import { Melee } from '../citizens/melee'
import { Ranged } from '../citizens/ranged'
import { Trainer } from '../citizens/trainer'
import { Worker } from '../citizens/worker'
import { Cannon } from '../tools/cannon'
import { Ladder } from '../tools/ladder'

export const baseTypeClasses = (type) => {
  switch (type) {
    case Chief.name:
      return Chief
    case Doctor.name:
      return Doctor
    case Melee.name:
      return Melee
    case Ranged.name:
      return Ranged
    case Trainer.name:
      return Trainer
    case Worker.name:
      return Worker
    case Barrack.name:
      return Barrack
    case DefenceTower.name:
      return DefenceTower
    case Field.name:
      return Field
    case Hospital.name:
      return Hospital
    case House.name:
      return House
    case Cannon.name:
      return Cannon
    case Ladder.name:
      return Ladder
    default:
      return Worker
  }
}
