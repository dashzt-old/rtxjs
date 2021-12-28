import { VScreen, vScreen } from 'vScreen'
import { drawScreen } from 'canvasScreen/screen'
// import { drawScreen } from 'symbolScreen/screen'
import { camera } from 'core/camera/camera'
import { bindCamControls } from 'camControls'
import { castRay } from 'core/castRay'
import { createScene } from 'testScenes/rotating'

const WIDTH = 120
const HEIGHT = 62

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
  // console.log('Ray casting took', performance.now() - start, 'ms.')
  const drawingStart = performance.now()
  drawScreen(vscreen)
  // console.log('Drawing to screen took', performance.now() - drawingStart, 'ms.')
  // console.log('Whole frame took', performance.now() - start, 'ms.')
  // drawMinimap(cam, gameScene)
}

renderScene()

bindCamControls(cam, () => {
  renderScene()
})

setInterval(() => {
  renderScene()
}, 60)

console.log('cam controls binded')

// const v = vector3(1, 1, -1)

// const n = v3utils.normalise(v)

// console.log(n)