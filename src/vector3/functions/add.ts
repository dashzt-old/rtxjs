import { Vector3, vector3 } from 'vector3'

export const add = (vec1: Vector3, vec2: Vector3): Vector3 => {
  return vector3(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z)
}