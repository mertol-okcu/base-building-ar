import { clearLocation, updateLocation } from '../stores/location_store'

let watchID

// updateLocation(40.100913499799205, 26.40578190923797)

export const watchLocation = () => {
  if (navigator.geolocation) {
    // watchID = navigator.geolocation.watchPosition(success, error);
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

export const closeLocation = () => {
  navigator.geolocation.clearWatch(watchID)
  watchID = null
  clearLocation()
}

const success = (position) => {
  updateLocation(position.coords.latitude, position.coords.longitude)
}

const error = (err) => {
  console.warn(err(`${err.code}): ${err.message}`))
}
