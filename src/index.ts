import { VScreen, vScreen } from 'vScreen'
import { drawScreen } from 'canvasScreen/screen'
// import { drawScreen } from 'symbolScreen/screen'
import { camera } from 'core/camera/camera'
import { bindCamControls } from 'camControls'
import { drawMinimap } from 'minimap/minimap'
import { castRay } from 'core/castRay'
import { createScene } from 'testScenes/3triangles'

const WIDTH = 500  
const HEIGHT = 500

const cam = camera({ width: WIDTH, height: HEIGHT })

const gameScene = createScene()

const fillVscreen = (): VScreen => {
  const vscreen = vScreen(WIDTH, HEIGHT)
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      vscreen.data[i][j] = castRay(gameScene, cam.rays[i][j])
    }
  }
  return vscreen
}

const renderScene = () => {
  const start = performance.now()
  const vscreen = fillVscreen()
  drawScreen(vscreen)
  console.log('Frame took', performance.now() - start)
  drawMinimap(cam, gameScene)
}

renderScene()
console.log('cam.origin.direction', cam.origin.direction)

bindCamControls(cam, () => {
  console.log('cam.origin.point', cam.origin.point)
  console.log('cam.origin.direction', cam.origin.direction)
  renderScene()
})

console.log('cam controls binded')

// const v = vector3(1, 1, -1)

// const n = v3utils.normalise(v)

// console.log(n)