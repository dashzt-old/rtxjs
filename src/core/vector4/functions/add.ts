import { Vector4, vector4 } from 'core/vector4'

export const add = (vec1: Vector4, vec2: Vector4): Vector4 => {
  return vector4(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z, vec1.u + vec2.u)
}