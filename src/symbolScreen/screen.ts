import 'symbolScreen/screen.css'
import { vScreen, VScreen } from 'vScreen'

const target = document.createElement('div')

target.className = 'charContainer'

document.body.appendChild(target)

const symbolsByDarkness = ' .:-=+*#%@'
const getSymbol = (value: number): string => { // 0 - 255
  if (value === 0) return symbolsByDarkness[1]
  const idx = Math.round((value / 255) * symbolsByDarkness.length - 1)
  return symbolsByDarkness[idx]
}

export const drawScreen = (vscreen: VScreen): void => {
  let result = ''
  for (let i = 0; i < vscreen.height; i++) {
    let row = ''
    for (let j = 0; j < vscreen.width; j++) {
      const value = vscreen.data[i][j] // 0 - 255
      row += getSymbol(value)
    }
    result += row + '\n'
  }
  target.innerHTML = result
}