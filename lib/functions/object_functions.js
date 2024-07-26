export const objectMap = (obj, fn) => {
  if (obj.length === 0) {
    return {}
  }
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  )
}

export const vec3ToObject = (vec3) => {
  return {
    x: vec3.x,
    y: vec3.y,
    z: vec3.z,
  }
}
