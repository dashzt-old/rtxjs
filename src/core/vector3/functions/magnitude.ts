import { Vector3 } from 'core/vector3'
 
export const magnitude = (vec: Vector3): number => {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z)
}