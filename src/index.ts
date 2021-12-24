import { vector3 } from 'vector3/vector3'
import { vScreen } from 'vScreen'
import { drawScreen } from 'symbolScreen/screen'
import { triangle } from 'triangle'
import { camera } from 'camera'

const vscreen = vScreen(50, 50)

console.log(vscreen)

drawScreen(vscreen)


const cam = camera(
  vector3(0, 0, 0),
  vector3(1, 0, 0)
)

const tri = triangle(
  vector3(0.1, 0.1, -0.1),
  vector3(0.1, -0.1, -0.1),
  vector3(0.1, 0, 0.1)
)