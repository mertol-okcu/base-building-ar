import { Location } from './location_model'

let watchID
export const liveLocation = new Location(null, null)

export function watchLocation() {
  if (navigator.geolocation) {
    // watchID = navigator.geolocation.watchPosition(success, error);
    navigator.geolocation.getCurrentPosition(success, error)

    window.addEventListener(`keypress`, (event) => {
      if (liveLocation.lat == null || liveLocation.long == null) {
        return
      }
      if (event.code == 'KeyW') {
        liveLocation.lat += 0.0001
      }
      if (event.code == 'KeyS') {
        liveLocation.lat -= 0.0001
      }
      if (event.code == 'KeyD') {
        liveLocation.long += 0.0001
      }
      if (event.code == 'KeyA') {
        liveLocation.long -= 0.0001
      }
      success({
        coords: { latitude: liveLocation.lat, longitude: liveLocation.long },
      })
    })
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

export function closeLocation() {
  navigator.geolocation.clearWatch(watchID)
  watchID = null
}

function success(position) {
  liveLocation.lat = position.coords.latitude
  liveLocation.long = position.coords.longitude

  const event = new Event('locationupdate')
  window.dispatchEvent(event)
}

function error(err) {
  console.warn(err(`${err.code}): ${err.message}`))
}
