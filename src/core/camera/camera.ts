import { Vector3, vector3, v3utils } from 'core/vector3'
import { vector4, Vector4, v4utils } from 'core/vector4'
import { Ray } from 'core/types/ray'
import { applyTransformation, transform, Transform } from 'core/types/transform'

export type Camera = {
  rays: Ray[][],
  transform: Transform,
  createRays: () => void
}

type CameraProps = {
  origin?: Ray,
  width?: number,
  height?: number,
  fov?: number
}

const defaultOrigin: Ray = {
  point: vector3(0, 0, 0),
  direction: vector3(0, 0, -1)
}

const defaultProps: CameraProps = {
  origin: defaultOrigin,
  width: 100,
  height: 100,
  fov: 90
}


const generatePrimaryRays = (width: number, height: number, fov: number, transform: Transform): Ray[][] => {
  console.log('transform', transform)
  const aspectRatio = width / height
  const fovRads = Math.PI / 180 * fov
  const res: Ray[][] = []
  const origin = applyTransformation(vector3(0, 0, 0), transform)
  for (let i = 0; i < height; i++) {
    res[i] = []
    for (let j = 0; j < width; j++) {
      // NDC - normalizaed device cpace, coordinate from 0 to 1
      const NDCx = (j + 0.5) / width // + 0.5 to shift point right into the center of each 'pixel')
      const NDCy = (i + 0.5) / height

      // screen - coordinates between [-1; -1] and [1; 1]
      const screenX = (2 * NDCx - 1) * aspectRatio * Math.tan(fovRads / 2) * (window['aspectRatioMultiplier'] || 1)
      const screenY = (1 - 2 * NDCy) * Math.tan(fovRads / 2) 

      let finalVector = vector3(screenX, screenY, -1)
      
      const rotated = applyTransformation(finalVector, transform)
      // console.log('----')
      // console.log({ x: screenX, y: screenY, z: -1 })
      // console.log(finalVector)
      // console.log(rotated)

      res[i][j] = {
        point: origin,
        direction: v3utils.normalise(rotated)
      }
    }
  }
  return res
}

export const camera = ({
  width = 100,
  height = 100,
  fov = 90
}: CameraProps = defaultProps): Camera => {
  const _transform = transform()
  console.log('create camera')
  const cam = {
    rays: generatePrimaryRays(width, height, fov, _transform),
    transform: _transform,
    createRays: () => cam.rays = generatePrimaryRays(width, height, fov, _transform) 
  }
  return cam
}