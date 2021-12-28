export type Vector4 = {
  x: number,
  y: number,
  z: number,
  u: number
}

export const vector4 = (x: number, y: number, z: number, u: number): Vector4 => {
  const vec = {
    x: Math.abs(x) < 1e-8 ? 0 : x,
    y: Math.abs(y) < 1e-8 ? 0 : y,
    z: Math.abs(z) < 1e-8 ? 0 : z,
    u: Math.abs(u) < 1e-8 ? 0 : u
  }
  return vec
}
