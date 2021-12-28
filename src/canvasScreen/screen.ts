import 'canvasScreen/screen.css'
import { vScreen, VScreen } from 'vScreen'

const canvas = document.createElement('canvas')

document.body.appendChild(canvas)

console.log('mounted canvas')

export const drawScreen = (vscreen: VScreen, zoom: number = 4): void => {
  canvas.width = vscreen.width
  canvas.height = vscreen.height
  canvas.style.height = `${vscreen.height * zoom}px`
  canvas.style.width = `${vscreen.width * zoom}px`
  const ctx = canvas.getContext('2d')
  for (let i = 0; i < vscreen.height; i++) {
    for (let j = 0; j < vscreen.width; j++) {
      const value = vscreen.data[i][j] // 0 - 255
      ctx.fillStyle = "rgba(" + value.r + "," + value.g + "," + value.b + "," + 1 + ")";
      ctx.fillRect(j, i, 1, 1)
    }
  }
}