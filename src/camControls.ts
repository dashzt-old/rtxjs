import { Camera } from 'core/camera/camera'
import { v3utils, vector3 } from 'core/vector3'
import { v4utils, vector4 } from 'core/vector4'

const keys = ['w', 'a', 's', 'd', 'f', 'r', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
export const bindCamControls = (cam: Camera, callback): void => {
  document.addEventListener('keydown', (e) => {
    console.log('keypress', e.key)
    if (!keys.includes(e.key)) return
    e.preventDefault()
    if (e.key === 'w') {
      cam.transform.move(vector3(0, 0, -0.05))
    }
    if (e.key === 'a') {
      cam.transform.move(vector3(-0.05, 0, 0))
    }
    if (e.key === 's') {
      cam.transform.move(vector3(0, 0, 0.05))
    }
    if (e.key === 'd') {
      cam.transform.move(vector3(0.05, 0, 0))
    }
    if (e.key === 'r') {
      cam.transform.move(vector3(0, 0.05, 0))
    }
    if (e.key === 'f') {
      cam.transform.move(vector3(0, -0.05, 0))
    }
    if (e.key === 'ArrowUp') {
      cam.transform.rotateX(3)
    }
    if (e.key === 'ArrowDown') {
      cam.transform.rotateX(-3)
    }
    if (e.key === 'ArrowLeft') {
      cam.transform.rotateY(-3)
    }
    if (e.key === 'ArrowRight') {
      cam.transform.rotateY(3)
    }
    cam.createRays()
    callback()
  })
}