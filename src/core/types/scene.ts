import { SceneObject } from 'core/types/sceneObject'

export type Scene = {
  objects: SceneObject[]
}

export const scene = () => {
  const _objects = [] 
  return {
    objects: _objects,
    addObject: (obj: SceneObject) => {
      _objects.push(obj)
    }
  }
}