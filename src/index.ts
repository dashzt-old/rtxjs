import { vector3, v3utils } from 'vector3'
import { VScreen, vScreen } from 'vScreen'
import { drawScreen } from 'canvasScreen/screen'
// import { drawScreen } from 'symbolScreen/screen'
import { triangle } from 'triangle'
import { camera } from 'camera'
import { triangleIntersection } from 'triangleIntersection'
import { bindCamControls } from 'camControls'
import { drawMinimap } from 'minimap/minimap'

const cam = camera(
  vector3(0, 0, 0),
  vector3(1, 0, 0)
)

const tri = triangle(
  vector3(1, 1, -1),
  vector3(1, -1, -1),
  vector3(1, 0, 1),
  { r: 255, g: 0, b: 0 }
)

const tri2 = triangle(
  vector3(10, 10, -10),
  vector3(10, -10, -10),
  vector3(10, 0, 10),
  { r: 0, g: 255, b: 0 }
)

const triangles = [tri, tri2]

const fillVscreen = (): VScreen => {
  const vscreen = vScreen(80, 40)
  const FOV = 120
  const verticalFOV = 90
  const horizontalStep = FOV / vscreen.width
  const verticalStep = verticalFOV / vscreen.height
  const halfFOV = FOV / 2
  const halfVerticalFOV = verticalFOV / 2
  for (let i = 0; i < vscreen.height; i++) {
    for (let j = 0; j < vscreen.width; j++) {
      for (let k = 0; k < triangles.length; k++) {
        const triangle = triangles[k]
        const originalDir = cam.zeroRay.direction

        const tiltedHorizontally = v3utils.rotateZ(originalDir, -halfFOV + j * horizontalStep)
        const tiltedVertically = v3utils.rotateY(tiltedHorizontally, -halfVerticalFOV + i * verticalStep) 
        
        const intersectionDistance = triangleIntersection({
          direction: tiltedVertically,
          point: cam.zeroRay.point
        }, triangle)
        if (intersectionDistance > 0) {
          vscreen.data[i][j] = triangle.color
          break
        }
      }
    }
  }
  return vscreen
}

const renderScene = () => {
  const start = performance.now()
  const vscreen = fillVscreen()
  drawScreen(vscreen)  
  console.log('Frame took', performance.now() - start)
  drawMinimap(cam, triangles)
}
renderScene()
console.log('cam.zeroRay.direction', cam.zeroRay.direction)

bindCamControls(cam, () => {
  console.log('cam.zeroRay.point', cam.zeroRay.point)
  console.log('cam.zeroRay.direction', cam.zeroRay.direction)
  renderScene()
})
console.log('cam controls binded')