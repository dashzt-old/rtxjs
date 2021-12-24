import { rgb } from 'rgb'
import { Vector3 } from 'vector3/vector3'

export type Triangle = {
  p0: Vector3,
  p1: Vector3,
  p2: Vector3,
  color: rgb
}

export const triangle = (p0: Vector3, p1: Vector3, p2: Vector3, color: rgb = { r: 255, g: 255, b: 255 }): Triangle => {
  return { p0, p1, p2, color }
}