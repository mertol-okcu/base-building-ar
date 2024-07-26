import { user } from '../database/auth_service'
import { createDefaultBase } from '../logic/session/default_base'
import { SessionController } from '../logic/session/session_controller'
import { getLocation } from './location_store'
import { EnvironmentState } from '../logic/session/environment_state'
import { TravelState } from '../logic/session/travel_state'
import { readBaseFromDb } from '../database/base_db_service'
import { BaseState } from '../logic/session/base_state'

let session

export const getSession = () => {
  if (session == null) {
    return null
  }

  return Object.freeze(session)
}

export const initSession = async () => {
  session = new SessionController()

  let base
  const baseFromDb = await readBaseFromDb(user.uid)

  if (baseFromDb) {
    // ToDo Uğur: fromObject is a factory method used as an alternative constructor
    // you need to create fromObject for every class
    base = BaseState.fromObject(baseFromDb)
  } else {
    base = createDefaultBase(user.uid, getLocation())
  }
  const travel = new TravelState()
  const environment = new EnvironmentState()
  environment.loadRandom(base.location)
  session.deployBase(defaultBase, travel, environment)
}

export const closeSession = () => {
  session = null
}
