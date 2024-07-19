let watchID;
export let liveLocation = undefined;

export function watchLocation() {
  if (navigator.geolocation) {
    // watchID = navigator.geolocation.watchPosition(success, error);
    navigator.geolocation.getCurrentPosition(success, error);

    window.addEventListener(`keypress`, (event) => {
      if (liveLocation.lat == null || liveLocation.long == null) {
        return;
      }
      if (event.code == "KeyW") {
        liveLocation.lat += 0.0001;
      }
      if (event.code == "KeyS") {
        liveLocation.lat -= 0.0001;
      }
      if (event.code == "KeyD") {
        liveLocation.long += 0.0001;
      }
      if (event.code == "KeyA") {
        liveLocation.long -= 0.0001;
      }
      success({
        coords: { latitude: liveLocation.lat, longitude: liveLocation.long },
      });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

export function closeLocation() {
  navigator.geolocation.clearWatch(watchID);
  watchID = null;
}

// Success callback function
function success(position) {
  liveLocation.lat = position.coords.latitude;
  liveLocation.long = position.coords.longitude;

  const event = new CustomEvent("locationupdate", {
    detail: liveLocation,
  });
  window.dispatchEvent(event);
}

// Error callback function
function error(err) {
  console.warn(err(`${err.code}): ${err.message}`));
}
