import { Ray } from 'ray'
import { Triangle } from 'triangle'
import { Vector3 } from 'vector3/vector3' 

// Triangle intersection using Möller - Trumbore method 
// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9C%D0%BE%D0%BB%D0%BB%D0%B5%D1%80%D0%B0_%E2%80%94_%D0%A2%D1%80%D1%83%D0%BC%D0%B1%D0%BE%D1%80%D0%B0

export const triangleIntersection = (ray: Ray, triangle: Triangle) => {
  const { point: orig, direction: dir } = ray
  const { p0, p1, p2 } = triangle
  
}