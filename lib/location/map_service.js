import { marker } from 'leaflet'

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
    let path
    switch (obj.constructor.name) {
      case 'CoalMine':
        path = '../../assets/map_icons/coal.png'
        break
      case 'WoodMine':
        path = '../../assets/map_icons/wood.png'
        break
      case 'StoneMine':
        path = '../../assets/map_icons/stone.png'
        break
      case 'IronMine':
        path = '../../assets/map_icons/iron.png'
        break
      case 'BaseState':
        path = '../../assets/map_icons/castle.png'
        break
      case 'EnemyBase':
        path = '../../assets/map_icons/other_base.png'
        break
      case 'BanditGang':
        path = '../../assets/map_icons/bandit.png'
        break
      default:
        //error
        throw Error('This object has no icon')
    }

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
