import { Vector3, vector3 } from 'vector3'

export const divide = (vec: Vector3, scalar: number): Vector3 => {
  return vector3(vec.x / scalar, vec.y / scalar, vec.z / scalar)
}