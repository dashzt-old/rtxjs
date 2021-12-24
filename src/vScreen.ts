import { rgb } from 'rgb'

export type VScreen = {
  width: number,
  height: number,
  data: rgb[][] // 0 - 255
}

// data[y][x]
// First array is row
// Second array is column
// So whenever trying to draw something its y coordinate should go first

export const vScreen = (width: number, height: number): VScreen => {
  const result = new Array(height)
  let i = 0
  while (i < height) {
    result[i] = new Array(width)
    let j = 0
    while (j < width) {
      result[i][j] = { r: 0, g: 0, b: 0 }
      j++
    }
    i++
  }
  return {
    width,
    height,
    data: result
  }
}