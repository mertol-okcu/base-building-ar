import { marker } from 'leaflet'
import { iconPaths } from '../constants/icons'

export class MapService {
  map
  userMarker
  markers = {}

  constructor(map, lat, long) {
    this.map = map
    this.map.setView([lat, long])

    // const _layer = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution:
    //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // }).addTo(this.map)

    const _layer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(map)
  }

  updateUserLocation(lat, long) {
    if (this.userMarker == undefined) {
      this.userMarker = marker([lat, long]).addTo(this.map)
    } else {
      this.userMarker.setLatLng([lat, long])
    }

    this.userMarker.bindPopup(`You are here. \n ${[lat, long]}`)
    this.userMarker.addEventListener('click', (event) => {
      this.userMarker.openPopup()
    })
  }

  removeIcon(objId) {
    const icon = this.markers[objId]
    if (icon == null) throw Error('Removing icon cannot be found')
    this.map.remove(icon)
  }

  addObject(obj) {
    const path = 'https://cdn-icons-png.flaticon.com/128/4664/4664892.png'
    // iconPaths[obj.constructor.name]

    const objIcon = L.icon({
      iconUrl: path,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      popupAnchor: [0, -8],
    })

    const _marker = L.marker([obj.location.lat, obj.location.long], {
      icon: objIcon,
    }).addTo(this.map)

    _marker.bindPopup(
      `${obj.constructor.name} : lat:${obj.location.lat.toFixed(
        2
      )}, long:${obj.location.long.toFixed(2)}`
    )

    _marker.addEventListener('click', (event) => {
      _marker.openPopup()
    })

    this.markers[obj.id] = _marker
  }
}
