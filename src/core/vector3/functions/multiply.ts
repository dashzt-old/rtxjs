import { Vector3, vector3 } from 'core/vector3'

export const multiply = (vec: Vector3, scalar: number): Vector3 => {
  return vector3(vec.x * scalar, vec.y * scalar, vec.z * scalar)
}
