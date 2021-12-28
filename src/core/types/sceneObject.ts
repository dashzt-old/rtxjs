import { rgb } from 'core/types/rgb'
import { triangle, Triangle } from 'core/primitives/triangle'
import { vector3, Vector3 } from 'core/vector3'
import { vector4, Vector4 } from 'core/vector4'
import { applyTransformation, defaultTransformationMatrix, transform, Transform } from 'core/types/transform'

export type SceneObject = {
  originalTriangles: Triangle[],
  triangles: Triangle[],
  transform: Transform,
  applyTransformation: () => void,
  color: rgb
}

type SceneObjectProps = {
  triangles: Triangle[],
  color: rgb,
  position: Vector3
}

const defaultColor = { r: 255, g: 255, b: 255 }


// Default position of any object should be 0, 0, 0 unless transformationMatrix is applied.
export const sceneObject = ({ triangles, color = defaultColor, position = vector3(0, 0, 0) }: SceneObjectProps): SceneObject => {
  const obj = {
    originalTriangles: triangles,
    triangles: [],
    transform: transform(),
    applyTransformation: () => {
      obj.triangles = obj.originalTriangles.map((tr) => triangle(
        applyTransformation(tr.p0, obj.transform),
        applyTransformation(tr.p1, obj.transform),
        applyTransformation(tr.p2, obj.transform),
      ))
    },
    color
  } 
  obj.transform.move(position)
  obj.applyTransformation()
  return obj 
}