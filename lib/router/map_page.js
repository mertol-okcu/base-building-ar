import { liveLocation } from "../location/live_location.js";
import { MapService } from "../location/map_service.js";
import { goToBasePage } from "./router.js";
import { map } from "leaflet";

let mapService;

export const initMapPage = () => {
  if (liveLocation.lat != null && liveLocation.long != null) {
    handleLocationUpdate();
  }
  window.addEventListener("locationupdate", handleLocationUpdate);

  document
    .getElementById("deploy-base-button")
    .addEventListener("click", (event) => {
      goToBasePage();
      disposeMapPage();
    });
};

const handleLocationUpdate = () => {
  if (mapService == undefined) {
    document.getElementById("loading-indicator").style.display = "none";
    document.getElementById("deploy-base-button").style.display = "block";

    const mapDiv = document.getElementById("map");
    const _map = map(mapDiv, { center: [0, 0], zoom: 13 });
    mapService = new MapService(_map, liveLocation.lat, liveLocation.long);
  }
  mapService.updateUserLocation(liveLocation.lat, liveLocation.long);
  // setUserLocation(user.uid, event.detail.lat, event.detail.long);
};

export const disposeMapPage = () => {
  window.removeEventListener(`locationupdate`, handleLocationUpdate);
  mapService = undefined;
};
