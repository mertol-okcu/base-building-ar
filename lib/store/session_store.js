import { user } from '../database/auth_service'
import { createDefaultBase } from '../logic/session/default_base'
import { SessionController } from '../logic/session/session_controller'
import { getLocation } from './location_store'

let session

export const getSession = () => {
  if (session == null) {
    return null
  }

  return Object.freeze(session)
}

export const initSession = () => {
  session = new SessionController()
  const defaultBase = createDefaultBase(user.uid, getLocation())
  session.deployBase(defaultBase)
}

export const closeSession = () => {
  session = null
}
