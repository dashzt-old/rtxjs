import { add } from 'vector3/functions/add'
import { crossProduct } from 'vector3/functions/crossProduct'
import { divide } from 'vector3/functions/divide'
import { dotProduct } from 'vector3/functions/dotProduct'
import { magnitude } from 'vector3/functions/magnitude'
import { multiply } from 'vector3/functions/multiply'
import { multiplyByMatrix } from 'vector3/functions/multiplyByMatrix'
import { normalise } from 'vector3/functions/normalise'
import { rotateX, rotateY, rotateZ } from 'vector3/functions/rotate'
import { subtract } from 'vector3/functions/subtract'

export const v3utils = {
  add,
  crossProduct,
  divide,
  dotProduct,
  magnitude,
  multiply,
  multiplyByMatrix,
  normalise,
  rotateX,
  rotateY,
  rotateZ,
  subtract
}

export { Vector3, vector3 } from 'vector3/vector3'
