import { Camera } from 'camera'
import { v3utils, vector3 } from 'vector3'

const keys = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
export const bindCamControls = (cam: Camera, callback): void => {
  document.addEventListener('keydown', (e) => {
    console.log('keypress', e.key)
    if (!keys.includes(e.key)) return
    if (e.key === 'w') {
      cam.zeroRay.point = v3utils.add(cam.zeroRay.point, vector3(0.1, 0, 0))
    } 
    if (e.key === 'a') {
      cam.zeroRay.point = v3utils.add(cam.zeroRay.point, vector3(0, -0.1, 0))
    }
    if (e.key === 's') {
      cam.zeroRay.point = v3utils.add(cam.zeroRay.point, vector3(-0.1, 0, 0))
    }
    if (e.key === 'd') {
      cam.zeroRay.point = v3utils.add(cam.zeroRay.point, vector3(0, 0.1, 0))
    }
    if (e.key === 'ArrowUp') {
      cam.zeroRay.direction = v3utils.rotateZ(cam.zeroRay.direction, 3)
    }
    if (e.key === 'ArrowDown') {
      cam.zeroRay.direction = v3utils.rotateZ(cam.zeroRay.direction, -3)
    }
    if (e.key === 'ArrowLeft') {
      cam.zeroRay.direction = v3utils.rotateY(cam.zeroRay.direction, -3)
    }
    if (e.key === 'ArrowRight') {
      cam.zeroRay.direction = v3utils.rotateY(cam.zeroRay.direction, 3)
    }
    callback()
  })
}