import { vector3, v3utils } from 'vector3'
import { VScreen, vScreen } from 'vScreen'
import { drawScreen } from 'canvasScreen/screen'
import { triangle } from 'triangle'
import { camera } from 'camera'
import { triangleIntersection } from 'triangleIntersection'
import { bindCamControls } from 'camControls'

const vscreen = vScreen(100, 100)

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
  vector3(1, 1, -1),
  vector3(1, -1, -1),
  vector3(1, 0, 1),
  { r: 0, g: 255, b: 0 }
)

const fillVscreen = (screen: VScreen) => {
  const FOV = 120
  const verticalFOV = 90
  const horizontalStep = FOV / screen.width
  const verticalStep = verticalFOV / screen.height
  const halfFOV = FOV / 2
  const halfVerticalFOV = verticalFOV / 2

  for (let i = 0; i < screen.height; i++) {
    for (let j = 0; j < screen.width; j++) {
      const originalDir = cam.zeroRay.direction

      const tiltedHorizontally = v3utils.rotateZ(originalDir, -halfFOV + j * horizontalStep)
      const tiltedVertically = v3utils.rotateY(tiltedHorizontally, -halfVerticalFOV + i * verticalStep) 
      
      const intersectionDistance = triangleIntersection({
        direction: tiltedVertically,
        point: cam.zeroRay.point
      }, tri)
      if (intersectionDistance <= 0) {
        screen.data[i][j] = { r: 0, g: 0, b: 0 }
      } else {
        screen.data[i][j] = tri.color
      }
    }
  }
}

const renderScene = () => {
  const start = performance.now()
  fillVscreen(vscreen)
  drawScreen(vscreen)  
  console.log('Frame took', performance.now() - start)
}
renderScene()
console.log('cam.zeroRay.direction', cam.zeroRay.direction)

bindCamControls(cam, () => {
  console.log('cam.zeroRay.point', cam.zeroRay.point)
  console.log('cam.zeroRay.direction', cam.zeroRay.direction)
  renderScene()
})
console.log('cam controls binded')