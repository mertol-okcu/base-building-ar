import { EnvironmentState } from "./environment_state";
import { TravelState } from "./travel_state";

export class SessionController {
  base;
  travel;
  environment;

  constructor() {}

  deployBase = (base) => {
    this.base = base;
    this.travel = new TravelState();
    this.environment = new EnvironmentState();
    this.environment.loadRandom(base.location);
  };

  collectCitizen = (citizen) => {
    this.base.citizens.remove(citizen.id);
    this.travel.citizens[citizen.id] = citizen;
  };

  releaseCitizen = (citizen) => {
    this.travel.citizens.remove(citizen.id);
    this.base.citizens[citizen.id] = citizen;
  };
}
