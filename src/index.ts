import { vector3, v3utils } from 'vector3'
import { VScreen, vScreen } from 'vScreen'
import { drawScreen } from 'canvasScreen/screen'
import { triangle } from 'triangle'
import { camera } from 'camera'
import { triangleIntersection } from 'triangleIntersection'
import { bindCamControls } from 'camControls'

const vscreen = vScreen(200, 200)

const cam = camera(
  vector3(0, 0, 0),
  vector3(1, 0, 0)
)

const tri = triangle(
  vector3(1, 1, -1),
  vector3(1, -1, -1),
  vector3(1, 0, 1)
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
      const originalDirection = cam.zeroRay.direction
      
      const directionAdjustedHorizontaly = v3utils.rotateY(originalDirection, -halfFOV + j * horizontalStep)
      const directionAdjustedVertically = v3utils.rotateZ(directionAdjustedHorizontaly, halfVerticalFOV - i * verticalStep)
      const finalDir = directionAdjustedVertically
      const intersectionDistance = triangleIntersection({
        direction: finalDir,
        point: cam.zeroRay.point
      }, tri)
      if (intersectionDistance <= 0) {
        screen.data[i][j] = 0
      } else {
        screen.data[i][j] = 255
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