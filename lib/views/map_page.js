import { map } from 'leaflet'
import { MapService } from '../location/map_service.js'
import { pushBasePage } from './router.js'
import { getLocation } from '../stores/location_store.js'
import { getSession, initSession } from '../stores/session_store.js'

let mapService

export const initMapPage = () => {
  if (getLocation()) {
    handleLocationUpdate()
  }
  window.addEventListener('locationupdate', handleLocationUpdate)

  const button = document.getElementById('base-button')
  const session = getSession()

  if (session == null) {
    const deployBase = async (event) => {
      await initSession()
      loadEnvironmentToMap()
      button.innerText = 'Go To Base'
      button.removeEventListener('click', deployBase)
      button.addEventListener('click', (event) => {
        pushBasePage()
      })
    }
    button.addEventListener('click', deployBase)
  } else {
    loadEnvironmentToMap()
    button.innerText = 'Go To Base'
    button.addEventListener('click', (event) => {
      pushBasePage()
    })
  }
}

const handleLocationUpdate = () => {
  const location = getLocation()

  if (mapService == undefined) {
    document.getElementById('loading-indicator').style.display = 'none'
    document.getElementById('base-button').style.display = 'block'
    createMap()
  }

  mapService.updateUserLocation(location.lat, location.long)
}

const createMap = () => {
  const location = getLocation()

  const mapDiv = document.getElementById('map')
  const _map = map(mapDiv, { center: [0, 0], zoom: 15 })
  mapService = new MapService(_map, location.lat, location.long)
}

const loadEnvironmentToMap = () => {
  const session = getSession()
  if (session == null) {
    return
  }

  const env = session.environment

  mapService.addObject(session.base)

  for (const mine of Object.values(env.mines)) {
    mapService.addObject(mine)
  }

  for (const enemy of Object.values(env.enemies)) {
    mapService.addObject(enemy)
  }

  for (const banditGang of Object.values(env.banditGangs)) {
    mapService.addObject(banditGang)
  }
}

export const disposeMapPage = () => {
  window.removeEventListener(`locationupdate`, handleLocationUpdate)
  mapService = undefined
}
