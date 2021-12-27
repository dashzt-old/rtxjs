import 'minimap/minimap.css'
import { Camera } from 'core/camera/camera'
import { Vector3, v3utils } from 'core/vector3'
import { Triangle } from 'core/types/triangle'
import { rgb } from 'core/types/rgb'
import { Scene } from 'core/types/scene'
 
const canvas = document.createElement('canvas')

const WIDTH = 300
const HEIGHT = 300

canvas.id = 'minimap'
canvas.width = WIDTH
canvas.height = HEIGHT


document.body.appendChild(canvas)

export const drawMinimap = (cam: Camera, scene: Scene): void => {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  const drawPoint = (vec: Vector3, color: rgb, size: number): void => {
    const canvasCoords = {
      x: (WIDTH / 2) + vec.x,
      y: (HEIGHT / 2) + vec.z
    }
    ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + 1 + ")"
    ctx.fillRect(canvasCoords.x, canvasCoords.y, size, size)
  }
  drawPoint(cam.origin.point, { r: 255, g: 255, b: 255}, 3)
  
  scene.objects.forEach((obj) => {
    obj.triangles.forEach(tri => {
      drawPoint(tri.p0, obj.color, 1)
      drawPoint(tri.p1, obj.color, 1)
      drawPoint(tri.p2, obj.color, 1)
    })
  })
  
  const drawCamDirection = () => {
    const lineStart = {
      x: (WIDTH / 2) + cam.origin.point.x,
      y: (WIDTH / 2) + cam.origin.point.z
    }
    const vector = v3utils.add(cam.origin.point, v3utils.multiply(cam.origin.direction, 10))
    const lineEnd = {
      x: (WIDTH / 2) + vector.x,
      y: (WIDTH / 2) + vector.z
    }
    ctx.beginPath()
    ctx.moveTo(lineStart.x, lineStart.y)
    ctx.lineTo(lineEnd.x, lineEnd.y)
    ctx.strokeStyle = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 1 + ")"
    ctx.stroke()
  }
  drawCamDirection()
}