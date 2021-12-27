import { Vector3, vector3 } from 'core/vector3'
import { multiplyByMatrix } from 'core/vector3/functions/multiplyByMatrix'

const getRotationMatrixX = (angle: number): Vector3[] => {
  const radAngle = Math.PI / 180 * angle
  return [
    vector3(1, 0, 0),
    vector3(0, Math.cos(radAngle), Math.sin(radAngle)),
    vector3(0, -Math.sin(radAngle), Math.cos(radAngle))
  ]
}

const getRotationMatrixY = (angle: number): Vector3[] => {
  const radAngle = Math.PI / 180 * angle
  return [
    vector3(Math.cos(radAngle), 0, -Math.sin(radAngle)),
    vector3(0, 1, 0),
    vector3(Math.sin(radAngle), 0, Math.cos(radAngle))
  ]
}

const getRotationMatrixZ = (angle: number): Vector3[] => {
  const radAngle = Math.PI / 180 * angle
  return [
    vector3(Math.cos(radAngle), Math.sin(radAngle), 0),
    vector3(-Math.sin(radAngle), Math.cos(radAngle), 0),
    vector3(0, 0, 1)
  ]
}

export const rotateX = (vec: Vector3, angle: number): Vector3 => {
  return multiplyByMatrix(vec, getRotationMatrixX(angle))
}

export const rotateY = (vec: Vector3, angle: number): Vector3 => {
  return multiplyByMatrix(vec, getRotationMatrixY(angle))
}

export const rotateZ = (vec: Vector3, angle: number): Vector3 => {
  return multiplyByMatrix(vec, getRotationMatrixZ(angle))
}