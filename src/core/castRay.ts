import { Ray } from 'core/types/ray'
import { rgb } from 'core/types/rgb'
import { Scene } from 'core/types/scene'
import { SceneObject } from 'core/types/sceneObject'
import { triangleIntersection } from 'core/triangleIntersection'

export const castRay = (scene: Scene, ray: Ray): rgb => {
  let closestObject: SceneObject = null
  let closestTriangleDistance: number = Number.MAX_VALUE
  for (let m = 0; m < scene.objects.length; m++) {
    const object = scene.objects[m]
    const triangles = object.triangles
    for (let k = 0; k < triangles.length; k++) {
      const triangle = triangles[k]
  
      const intersectionDistance = triangleIntersection(ray, triangle)
  
      if (intersectionDistance > 0) {
        if (closestTriangleDistance > intersectionDistance) {
          closestTriangleDistance = intersectionDistance
          closestObject = object
        }
      }
    }
  }
  if (closestObject) {
    return closestObject.color
  } else {
    if (ray.direction.y < 0) return { r: 40, g: 40, b: 40 }
    return { r: 0, g: 0, b: 0 } // TODO: hit skybox
  }
}