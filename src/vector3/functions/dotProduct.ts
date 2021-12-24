import { Vector3  } from 'vector3'

export const dotProduct = (vec1: Vector3, vec2: Vector3): number => {
  return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z
}