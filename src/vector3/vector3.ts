export type Vector3 = {
  x: number,
  y: number,
  z: number
}

export const vector3 = (x: number, y: number, z: number): Vector3 => {
  const vec = { x, y, z }
  return vec
}
