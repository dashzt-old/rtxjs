import { sceneObject } from 'core/types/sceneObject'
import { triangle } from 'core/primitives/triangle'
import { Vector3, vector3 } from 'core/vector3'
import { vector4, v4utils } from 'core/vector4'
import { Scene, scene } from 'core/types/scene'

export const createScene = (): Scene => {
  const gameScene = scene()

  const tri = sceneObject({
    triangles: [
      triangle(
        vector3(-1, -0.5, 0),
        vector3(0, 1, 0),
        vector3(1, -0.5, 0)
      )
    ],
    color: { r: 255, g: 0, b: 0 },
    position: vector3(0, 0, -3)
  })

  // let movement = 0.03

  const move = () => {
    // if (tri.transformationMatrix[3].x > 2 || tri.transformationMatrix[3].x < -2) movement *= -1
    // let y = Math.cos(Math.PI / 4 * tri.transformationMatrix[3].x)
    // tri.transformationMatrix = [
    //   tri.transformationMatrix[0],
    //   tri.transformationMatrix[1],
    //   tri.transformationMatrix[2],
    //   vector4(tri.transformationMatrix[3].x + movement, y, tri.transformationMatrix[3].z, tri.transformationMatrix[3].u)
    // ]

    tri.transform.rotateY(2)
    
    tri.applyTransformation()
  }

  move()
  
  setInterval(() => {
    move()
  }, 30)


  gameScene.addObject(tri)



  return gameScene
}