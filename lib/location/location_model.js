export class LocationModel {
  lat
  long

  constructor(lat, long) {
    this.lat = lat
    this.long = long
  }

  toObject() {
    return {
      lat: this.lat,
      long: this.long,
    }
  }
}
