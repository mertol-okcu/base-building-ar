import { map } from 'leaflet'
import { MapService } from '../location/map_service.js'
import { goToBasePage } from './router.js'
import { getLocation } from '../store/location_store.js'
import { getSession, initSession } from '../store/session_store.js'

let mapService

export const initMapPage = () => {
  if (getLocation()) {
    handleLocationUpdate()
  }
  window.addEventListener('locationupdate', handleLocationUpdate)

  document
    .getElementById('deploy-base-button')
    .addEventListener('click', (event) => {
      if (getSession() == null) {
        initSession()
      }
      goToBasePage()
    })
}

const handleLocationUpdate = () => {
  const location = getLocation()

  if (mapService == undefined) {
    document.getElementById('loading-indicator').style.display = 'none'
    document.getElementById('deploy-base-button').style.display = 'block'
    createMap()
  }

  mapService.updateUserLocation(location.lat, location.long)
}

const createMap = () => {
  const location = getLocation()

  const mapDiv = document.getElementById('map')
  const _map = map(mapDiv, { center: [0, 0], zoom: 13 })
  mapService = new MapService(_map, location.lat, location.long)
  loadEnvironmentToMap()
}

const loadEnvironmentToMap = () => {
  const session = getSession()
  if (session == null) {
    return
  }

  const env = session.environment

  for (const mine of Object.values(env.mines)) {
    mapService.addMineCircle(mine)
  }

  for (const enemy of Object.values(env.enemies)) {
    mapService.addEnemyIcon(enemy)
  }

  for (const banditGang of Object.values(env.banditGangs)) {
    mapService.addBanditIcon(banditGang)
  }

  console.log(env)
}

export const disposeMapPage = () => {
  window.removeEventListener(`locationupdate`, handleLocationUpdate)
  mapService = undefined
}
