import { LocationModel } from '../location/location_model'

let currentLat
let currentLong

export const getLocation = () => {
  if (currentLat == undefined || currentLong == undefined) {
    return null
  }

  return Object.freeze(new LocationModel(currentLat, currentLong))
}

export const updateLocation = (lat, long) => {
  currentLat = lat
  currentLong = long
  const event = new Event('locationupdate')
  window.dispatchEvent(event)
}

const handleKeypress = (event) => {
  if (currentLat == null || currentLong == null) {
    return
  }
  let lat = currentLat
  let long = currentLong
  if (event.code == 'KeyW') {
    lat += 0.0001
  }
  if (event.code == 'KeyS') {
    lat -= 0.0001
  }
  if (event.code == 'KeyD') {
    long += 0.0001
  }
  if (event.code == 'KeyA') {
    long -= 0.0001
  }
  updateLocation(lat, long)
}

window.addEventListener(`keypress`, handleKeypress)

export const clearLocation = () => {
  currentLat = null
  currentLong = null
  window.removeEventListener('keypress', handleKeypress)
}
