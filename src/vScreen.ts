export type VScreen = {
  width: number,
  height: number,
  data: rgb[][]
}

export type rgb = {
  r: number,
  g: number,
  b: number
}

const defaultPixel = { r: 255, g: 255, b: 255 }

export const vScreen = (width: number, height: number): VScreen => {
  const result = new Array(height)
  let i = 0
  while (i < height) {
    result[i] = new Array(width)
    let j = 0
    while (j < width) {
      result[i][j] = defaultPixel
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