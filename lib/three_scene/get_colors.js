import { Doctor } from '../logic/citizens/doctor'
import { Worker } from '../logic/citizens/worker'
import { Trainer } from '../logic/citizens/trainer'
import { Melee } from '../logic/citizens/melee'
import { Ranged } from '../logic/citizens/ranged'
import { Temple } from '../logic/buildings/temple'
import { Hospital } from '../logic/buildings/hospital'
import { House } from '../logic/buildings/house'
import { Barrack } from '../logic/buildings/barrack'
import { Field } from '../logic/buildings/field'
import { DefenceTower } from '../logic/buildings/defence_tower'
import { Chief } from '../logic/citizens/chief'

export const getBuildingColor = (building) => {
  if (building instanceof Temple) return '#ffffff' //white
  if (building instanceof Hospital) return '#00ff00' //green
  if (building instanceof House) return '#0000ff' //blue
  if (building instanceof Barrack) return '#ff0000' //red
  if (building instanceof Field) return '#ffff00' //yellow
  if (building instanceof DefenceTower) return '#00ffff' //cyan
  return '#ff00ff' //magenta;
}

export const getCitizenColor = (citizen) => {
  if (building instanceof Chief) return '#ffffff' //white
  if (building instanceof Doctor) return '#00ff00' //green
  if (building instanceof Worker) return '#0000ff' //blue
  if (building instanceof Trainer) return '#ff0000' //red
  if (building instanceof Melee) return '#ffff00' //yellow
  if (building instanceof Ranged) return '#00ffff' //cyan
  return '#ff00ff' //magenta;

}
