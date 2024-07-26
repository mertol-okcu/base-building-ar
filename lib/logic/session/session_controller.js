export class SessionController {
  base
  travel
  environment

  constructor() {}

  deployBase = async (base, travel, environment) => {
    this.base = base
    this.travel = travel
    this.environment = environment
  }

  collectCitizen = (citizen) => {
    this.base.citizens.remove(citizen.id)
    this.travel.citizens[citizen.id] = citizen
  }

  releaseCitizen = (citizen) => {
    this.travel.citizens.remove(citizen.id)
    this.base.citizens[citizen.id] = citizen
  }
}
