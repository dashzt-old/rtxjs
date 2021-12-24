import { Vector3, vector3, v3utils } from 'vector3'
import { Ray } from 'ray'

export type Camera = {
  zeroRay: Ray
}

const FOV_ANGLE = 100

export const camera = (position: Vector3, direction: Vector3): Camera => {
  return {
    zeroRay: {
      point: position,
      direction
    }
  }
}