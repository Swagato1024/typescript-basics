type Coordinate = {
  x: number;
  y: number;
};

export const square = (x: number): number => x * x;

const distanceFromOrigin = (p1: Coordinate): number => {
  return Math.sqrt(square(p1.x) + square(p1.y));
};

export const distanceBetweenTwoPoints = (p1: Coordinate, p2: Coordinate): number => {
  const p: Coordinate = {
    x: p1.x - p2.x,
    y: p1.y - p2.y,
  };
  return distanceFromOrigin(p);
};

const p1: Coordinate = {
  x: 0,
  y: 0,
};

const p2: Coordinate = {
  x: 3,
  y: 4,
};

console.log("distance should be 5 ", distanceBetweenTwoPoints(p1, p2));
