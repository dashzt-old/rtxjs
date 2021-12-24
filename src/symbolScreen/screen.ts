import 'symbolScreen/screen.css'
import { VScreen, rgb } from 'vScreen'

const target = document.createElement('div')

target.className = 'charContainer'

document.body.appendChild(target)

console.log('123')

const grayScale = (pixel: rgb) => {
  return Math.floor((pixel.r + pixel.g + pixel.b) / 3)
} 

const symbolsByDarkness = ' .:-=+*#%@'
const getSymbol = (value: number): string => { // 0 - 255
  const idx = Math.round((value / 255) * symbolsByDarkness.length - 1)
  return symbolsByDarkness[idx]
}

export const drawScreen = (vscreen: VScreen): void => {
  let result = ''
  for (let i = 0; i < vscreen.height; i++) {
    let row = ''
    for (let j = 0; j < vscreen.width; j++) {
      const value = grayScale(vscreen.data[i][j]) // 0 - 255
      console.log(value, getSymbol(value))
      row += getSymbol(value)
    }
    result += row + '\n'
  }
  target.innerHTML = result
}