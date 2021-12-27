import { Camera } from 'core/camera/camera'
import { v3utils, vector3 } from 'core/vector3'

const keys = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
export const bindCamControls = (cam: Camera, callback): void => {
  document.addEventListener('keydown', (e) => {
    console.log('keypress', e.key)
    if (!keys.includes(e.key)) return
    if (e.key === 'w') {
      cam.origin.point = v3utils.add(cam.origin.point, vector3(0.1, 0, 0))
    } 
    if (e.key === 'a') {
      cam.origin.point = v3utils.add(cam.origin.point, vector3(0, -0.1, 0))
    }
    if (e.key === 's') {
      cam.origin.point = v3utils.add(cam.origin.point, vector3(-0.1, 0, 0))
    }
    if (e.key === 'd') {
      cam.origin.point = v3utils.add(cam.origin.point, vector3(0, 0.1, 0))
    }
    if (e.key === 'ArrowUp') {
      cam.origin.direction = v3utils.rotateY(cam.origin.direction, 3)
    }
    if (e.key === 'ArrowDown') {
      cam.origin.direction = v3utils.rotateY(cam.origin.direction, -3)
    }
    if (e.key === 'ArrowLeft') {
      cam.origin.direction = v3utils.rotateZ(cam.origin.direction, -3)
    }
    if (e.key === 'ArrowRight') {
      cam.origin.direction = v3utils.rotateZ(cam.origin.direction, 3)
    }
    callback()
  })
}