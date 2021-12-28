import { vector3, Vector3 } from 'core/vector3'
import { v4utils, Vector4, vector4 } from 'core/vector4'

export type Transform = {
  move: (v: Vector3) => void,
  rotateX: (angle: number) => void,
  rotateY: (angle: number) => void,
  rotateZ: (angle: number) => void,
  matrix: Vector4[]
}

export const transform = (): Transform => {
  const _rotations = {
    x: 0,
    y: 0,
    z: 0
  }
  const _transform = {
    move: (v: Vector3) => {
      const vectorMovement = v4utils.add(vector4(v.x, v.y, v.z, 0), _transform.matrix[3])
      _transform.matrix[3] = vectorMovement
      console.log(_transform)
    },
    rotateX: (angle: number) => {
      // 1 0 0 0
      // 0 cos sin 0
      // 0 -sin cos 0
      // 0 0 0 1
      _rotations.x += angle
      const angleRad = Math.PI / 180 * _rotations.x
      _transform.matrix[1].y = Math.cos(angleRad)
      _transform.matrix[1].z = Math.sin(angleRad)
      _transform.matrix[2].y = -Math.sin(angleRad)
      _transform.matrix[2].z = Math.cos(angleRad)
    },
    rotateY: (angle: number) => {
      // cos 0 -sin 0
      // 0 1 0 0
      // sin 0 cos 0
      // 0 0 0 1
      _rotations.y += angle
      const angleRad = Math.PI / 180 * _rotations.y

      _transform.matrix[0].x = Math.cos(angleRad)
      _transform.matrix[0].z = -Math.sin(angleRad)
      _transform.matrix[2].x = Math.sin(angleRad)
      _transform.matrix[2].z = Math.cos(angleRad)
    },
    rotateZ: (angle: number) => {
      // cos sin 0 0
      // -sin cos 0 0
      // 0 0 1 0
      // 0 0 0 1
      const angleRad = Math.PI / 180 * angle
    },
    matrix: defaultTransformationMatrix()
  }
  return _transform
}

export const defaultTransformationMatrix: () => Vector4[] = () => {
  return [
    vector4(1, 0, 0, 0),
    vector4(0, 1, 0, 0),
    vector4(0, 0, 1, 0),
    vector4(0, 0, 0, 1)
  ]
}

export const applyTransformation = (v: Vector3, trns: Transform): Vector3 => {
  const multiplied = v4utils.multiplyByMatrix(vector4(v.x, v.y, v.z, 1), trns.matrix)
  return vector3(multiplied.x, multiplied.y, multiplied.z)
}