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
  let base
  const baseObject = await readBaseFromDb(user.uid)

  if (baseObject) {
    try {
      base = BaseState.fromObject(baseObject)
    } catch (error) {
      throw error
    }
  } else {
    base = createDefaultBase(user.uid, getLocation())
  }

  const travel = new TravelState(user.uid)
  const environment = new EnvironmentState()
  environment.loadRandom(base.location)

  session = new SessionController()
  session.deployBase(base, travel, environment)
}

export const closeSession = () => {
  session = null
}
