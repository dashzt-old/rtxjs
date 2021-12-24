import { Vector3, v3utils, vector3 } from 'vector3'

export const normalise = (vec: Vector3): Vector3 => {
  vec = vector3(vec.x, vec.y, vec.z)
  return v3utils.divide(vec, v3utils.magnitude(vec))
}