import { Vector3, vector3, v3utils } from 'core/vector3'
import { Ray } from 'core/types/ray'

export type Camera = {
  origin: Ray,
  rays: Ray[][]
}

const FOV_ANGLE = 100

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


const generatePrimaryRays = (origin: Ray, width: number, height: number, fov: number): Ray[][] => {
  const aspectRatio = width / height
  const fovRads = Math.PI / 180 * fov
  const res: Ray[][] = []
  for (let i = 0; i < height; i++) {
    res[i] = []
    for (let j = 0; j < width; j++) {
      // NDC - normalizaed device cpace, coordinate from 0 to 1
      const NDCx = (j + 0.5) / width // + 0.5 to shift point right into the center of each 'pixel')
      const NDCy = (i + 0.5) / height

      // screen - coordinates between [-1; -1] and [1; 1]
      const screenX = (2 * NDCx - 1) * aspectRatio * Math.tan(fovRads / 2) * (window['aspectRatioMultiplier'] || 1)
      const screenY = (1 - 2 * NDCy) * Math.tan(fovRads / 2) 
      
      res[i][j] = {
        point: origin.point,
        direction: v3utils.normalise(vector3(screenX, screenY, origin.direction.z))
      }
    }
  }
  return res
}

export const camera = ({
  origin = defaultOrigin,
  width = 100,
  height = 100,
  fov = 90
}: CameraProps = defaultProps): Camera => {
  return {
    origin,
    rays: generatePrimaryRays(origin, width, height, fov)
  }
}