import { user } from "../database/auth_service.js";
import { MapService } from "../location/map_service.js";
import { goToBasePage } from "./router.js";
import { map } from "leaflet";

let mapService;

export const initMapPage = () => {
  const div = document.getElementById("map");

  window.addEventListener("locationupdate", handleLocationUpdate);

  document
    .getElementById("deploy-base-button")
    .addEventListener("click", (event) => {
      goToBasePage();
      disposeMapPage();
    });
};

const handleLocationUpdate = (event) => {
  if (mapService == undefined) {
    document.getElementById("loading-indicator").style.display = "none";
    document.getElementById("deploy-base-button").style.display = "block";

    const _map = map(div, { center: [0, 0], zoom: 13 });
    mapService = new MapService(_map, event.detail.lat, event.detail.long);
  }
  mapService.updateUserLocation(event.detail.lat, event.detail.long);
  // setUserLocation(user.uid, event.detail.lat, event.detail.long);
};

export const disposeMapPage = () => {
  window.removeEventListener(`locationupdate`, handleLocationUpdate);
};
