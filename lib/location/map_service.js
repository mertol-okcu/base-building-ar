import { tileLayer, marker, circle } from 'leaflet'

export class MapService {
  map
  userMarker
  resources

  constructor(map, lat, long) {
    this.map = map

    this.map.setView([lat, long])

    const _layer = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map)
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

  addResourceLocation(lat, long) {
    const _circle = circle([lat + 0.01, long + 0.01], {
      color: 'green',
      fillColor: '#77ff33',
      fillOpacity: 0.4,
      radius: 150,
    }).addTo(this.map)
    _circle.bindPopup('There is a resource.')
    _circle.addEventListener('click', (event) => {
      _circle.openPopup()
    })

    this.resources.push(_circle)
  }

  addEnemyBaseLocation(lat, long) {
    const _circle = circle([lat + 0.01, long + 0.01], {
      color: 'green',
      fillColor: '#770033',
      fillOpacity: 0.4,
      radius: 150,
    }).addTo(this.map)
    _circle.bindPopup('There is an enemy.')
    _circle.addEventListener('click', (event) => {
      _circle.openPopup()
    })

    this.resources.push(_circle)
  }
}
