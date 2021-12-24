import { Vector3 } from 'vector3/vector3'
import { Ray } from 'ray'

export type Camera = {
  zeroRay: Ray
}

export const camera = (position: Vector3, direction: Vector3): Camera  => {
  return {
    zeroRay: {
      point: position,
      direction
    }
  }
}