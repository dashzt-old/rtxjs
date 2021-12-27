import { add } from 'core/vector3/functions/add'
import { crossProduct } from 'core/vector3/functions/crossProduct'
import { divide } from 'core/vector3/functions/divide'
import { dotProduct } from 'core/vector3/functions/dotProduct'
import { magnitude } from 'core/vector3/functions/magnitude'
import { multiply } from 'core/vector3/functions/multiply'
import { multiplyByMatrix } from 'core/vector3/functions/multiplyByMatrix'
import { normalise } from 'core/vector3/functions/normalise'
import { rotateX, rotateY, rotateZ } from 'core/vector3/functions/rotate'
import { subtract } from 'core/vector3/functions/subtract'

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

export { Vector3, vector3 } from 'core/vector3/vector3'
