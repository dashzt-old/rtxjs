export type Vector3 = {
  x: number,
  y: number,
  z: number
}

export const vector3 = (x: number, y: number, z: number): Vector3 => {
  const vec = {
    x: Math.abs(x) < 1e-8 ? 0 : x,
    y: Math.abs(y) < 1e-8 ? 0 : y,
    z: Math.abs(z) < 1e-8 ? 0 : z 
  }
  return vec
}
