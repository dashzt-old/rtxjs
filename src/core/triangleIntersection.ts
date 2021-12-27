import { Ray } from 'core/types/ray'
import { Triangle } from 'core/types/triangle'
import { Vector3, v3utils } from 'core/vector3' 

// Triangle intersection using Möller - Trumbore method 
// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9C%D0%BE%D0%BB%D0%BB%D0%B5%D1%80%D0%B0_%E2%80%94_%D0%A2%D1%80%D1%83%D0%BC%D0%B1%D0%BE%D1%80%D0%B0

export const triangleIntersection = (ray: Ray, triangle: Triangle) => {
  const { point: orig, direction: dir } = ray
  const { p0: v0, p1: v1, p2: v2 } = triangle
  
  const e1 = v3utils.subtract(v1, v0)
  const e2 = v3utils.subtract(v2, v0)

  const pvec = v3utils.crossProduct(dir,  e2)
  const det = v3utils.dotProduct(e1, pvec)

  if (det < 1e-8 && det > -1e-8) {
    return 0
  }

  const inv_det = 1 / det
  const tvec = v3utils.subtract(orig, v0)

  const u = v3utils.dotProduct(tvec, pvec) * inv_det
  if (u < 0 || u > 1) 
    return 0

  const qvec = v3utils.crossProduct(tvec, e1)
  const v = v3utils.dotProduct(dir, qvec) * inv_det
  if (v < 0 || u + v > 1) return 0

  return v3utils.dotProduct(e2, qvec) * inv_det
}