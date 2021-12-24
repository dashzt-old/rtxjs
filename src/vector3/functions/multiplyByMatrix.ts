import { Vector3, vector3 } from 'vector3'

export const multiplyByMatrix = (vec: Vector3, matrix: Vector3[]): Vector3 => {
  return vector3(
    matrix[0].x * vec.x + matrix[1].x * vec.y + matrix[2].x * vec.z,
    matrix[0].y * vec.x + matrix[1].y * vec.y + matrix[2].y * vec.z,
    matrix[0].z * vec.x + matrix[1].z * vec.y + matrix[2].z * vec.z
  )
}