import { Vector4, vector4 } from 'core/vector4'

export const multiplyByMatrix = (vec: Vector4, matrix: Vector4[]): Vector4 => {
  return vector4(
    matrix[0].x * vec.x + matrix[1].x * vec.y + matrix[2].x * vec.z + matrix[3].x * vec.u,
    matrix[0].y * vec.x + matrix[1].y * vec.y + matrix[2].y * vec.z + matrix[3].y * vec.u,
    matrix[0].z * vec.x + matrix[1].z * vec.y + matrix[2].z * vec.z + matrix[3].z * vec.u,
    matrix[0].u * vec.x + matrix[1].u * vec.y + matrix[2].u * vec.z + matrix[3].u * vec.u,
  )
}

// const test = () => {
//   console.log('??')

//   const vec = vector4(1, 0, 0, 1)

//   const arr = [
//     vector4(1, 0, 0, 0),
//     vector4(0, 1, 0, 1),
//     vector4(0, 0, 1, 0),
//     vector4(1, 0, 0, 1)
//   ]

//   const a = multiplyByMatrix(vec, arr)
//   console.log(a)
// }

// setTimeout(test, 100)
//expect to have 2, 0, 0, 1