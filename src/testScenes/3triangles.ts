import { sceneObject } from 'core/types/sceneObject'
import { triangle } from 'core/types/triangle'
import { vector3 } from 'core/vector3'
import { Scene, scene } from 'core/types/scene'

export const createScene = (): Scene => {
  const gameScene = scene()

  const tri = sceneObject({
    triangles: [
      triangle(
        vector3(0, -2, -3),
        vector3(2, -2, -3),
        vector3(1, 0, -3)
      )
    ],
    color: { r: 255, g: 0, b: 0 }
  })

  gameScene.addObject(tri)

  const tri2 = sceneObject({
    triangles: [
      triangle(
        vector3(-2, -2, -3),
        vector3(0, -2, -3),
        vector3(-1, 0, -3)
      )
    ],
    color: { r: 0, g: 255, b: 0 }
  })

  gameScene.addObject(tri2)

  const tri3 = sceneObject({
    triangles: [
      triangle(
        vector3(-1, 0, -3),
        vector3(1, 0, -3),
        vector3(0, 2, -3)
      )
    ],
    color: { r: 0, g: 0, b: 255 }
  })

  gameScene.addObject(tri3)

  return gameScene
}