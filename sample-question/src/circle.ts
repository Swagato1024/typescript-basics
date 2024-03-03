import { distanceBetweenTwoPoints, square } from "./distance";

type Coordinate = {
  x: number;
  y: number;
};

type Circle = {
  radius: number;
  center: Coordinate;
};

const calculateArea = (c: Circle): number => {
  return Math.PI * square(c.radius);
};

const center: Coordinate = { x: 0, y: 0 };
const pointInsideTheCircle: Coordinate = { x: 1, y: 3 };
const pointOutsideTheCircle: Coordinate = { x: 10, y: 3 };

const c: Circle = {
  radius: 5,
  center,
};

const isInside = (circle: Circle, point: Coordinate) => {
  const distanceFromCenter = distanceBetweenTwoPoints(circle.center, point);
  return distanceFromCenter <= circle.radius;
};

console.log("area should be 78.53", calculateArea(c));
console.log(
  "should be true when the point is inside the circle",
  isInside(c, pointInsideTheCircle)
);

console.log(
  "should be false when the point is inside the circle",
  isInside(c, pointOutsideTheCircle)
);
