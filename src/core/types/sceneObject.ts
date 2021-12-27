import { rgb } from 'core/types/rgb'
import { Triangle } from 'core/types/triangle'

export type SceneObject = {
  triangles: Triangle[]
  color: rgb
}

type SceneObjectProps = {
  triangles: Triangle[],
  color: rgb
}

const defaultColor = { r: 255, g: 255, b: 255 }

export const sceneObject = ({ triangles, color = defaultColor }: SceneObjectProps) => {
  return {
    triangles,
    color
  }
}