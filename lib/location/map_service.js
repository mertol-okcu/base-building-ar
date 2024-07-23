import { tileLayer, marker, circle } from 'leaflet'

export class MapService {
  map
  userMarker
  circles = {}

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

  addPlayerBaseIcon(base) {
    console.log(base)
  }

  addMineCircle(mine) {
    const _circle = circle([mine.location.lat, mine.location.long], {
      color: 'green',
      fillColor: '#77ff33',
      fillOpacity: 0.1,
      radius: 50,
    }).addTo(this.map)
    _circle.bindPopup(
      `${mine.constructor.name} id:${mine.id} lat:${mine.location.lat.toFixed(
        2
      )}, long:${mine.location.long.toFixed(2)}`
    )

    _circle.addEventListener('click', (event) => {
      _circle.openPopup()
    })

    this.circles[mine.id] = _circle
  }

  removeMineCircle(mineId) {
    const mineCircle = this.circles[mineId]
    this.map.remove(mineCircle)
  }

  addEnemyIcon(enemy) {
    const enemyIcon = L.icon({
      iconUrl: '../../assets/map_icons/enemy.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })

    const _marker = L.marker([enemy.location.lat, enemy.location.long], {
      icon: enemyIcon,
    }).addTo(this.map)

    _marker.bindPopup(
      `${enemy.constructor.name} id:${
        enemy.id
      } lat:${enemy.location.lat.toFixed(
        2
      )}, long:${enemy.location.long.toFixed(2)}`
    )

    _marker.addEventListener('click', (event) => {
      _marker.openPopup()
    })

    this.circles[enemy.id] = _marker
  }

  removeMineCircle(enemyId) {
    const enemyIcon = this.circles[enemyId]
    this.map.remove(enemyIcon)
  }

  addBanditIcon(bandit) {
    const banditIcon = L.icon({
      iconUrl: '../../assets/map_icons/bandit.png', // İkon dosyasının yolu
      iconSize: [32, 32], // İkonun boyutu
      iconAnchor: [16, 32], // İkonun haritadaki konumuna göre anchor noktası
      popupAnchor: [0, -32], // Popup'ın ikonla olan ilişkisi
    })

    const _marker = L.marker([bandit.location.lat, bandit.location.long], {
      icon: banditIcon,
    }).addTo(this.map)

    _marker.bindPopup(
      `${bandit.constructor.name} id:${
        bandit.id
      } lat:${bandit.location.lat.toFixed(
        2
      )}, long:${bandit.location.long.toFixed(2)}`
    )

    _marker.addEventListener('click', (event) => {
      _marker.openPopup()
    })

    this.circles[bandit.id] = _marker
  }
}
