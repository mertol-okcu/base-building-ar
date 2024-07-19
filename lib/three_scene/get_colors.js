import { Doctor } from "../logic/citizens/doctor";
import { Worker } from "../logic/citizens/worker";
import { Trainer } from "../logic/citizens/trainer";
import { Melee } from "../logic/citizens/melee";
import { Ranged } from "../logic/citizens/ranged";
import { Temple } from "../logic/buildings/temple";
import { Hospital } from "../logic/buildings/hospital";
import { House } from "../logic/buildings/house";
import { Barrack } from "../logic/buildings/barrack";
import { Field } from "../logic/buildings/field";
import { DefenceTower } from "../logic/buildings/defence_tower";
import { Chief } from "../logic/citizens/chief";

export const getBuildingColor = (building) => {
  switch (typeof building) {
    case Temple:
      return "#ffffff"; //white
    case Hospital:
      return "#00ff00"; //green
    case House:
      return "#0000ff"; //blue
    case Barrack:
      return "#ff0000"; //red
    case Field:
      return "#ffff00"; //yellow
    case DefenceTower:
      return "#00ffff"; //cyan
    default:
      return "#ff00ff"; //magenta;
  }
};

export const getCitizenColor = (citizen) => {
  switch (typeof citizen) {
    case Chief:
      return "#ffffff"; //white
    case Doctor:
      return "#00ff00"; //green
    case Worker:
      return "#0000ff"; //blue
    case Trainer:
      return "#ff0000"; //red
    case Melee:
      return "#ffff00"; //yellow
    case Ranged:
      return "#00ffff"; //cyan
    default:
      return "#ff00ff"; //magenta;
  }
};
