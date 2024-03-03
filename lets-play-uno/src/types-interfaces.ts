export const enum Color {
  red = "red",
  yellow = "yellow",
  blue = "yellow",
  green = "green",
  wild = "wild",
}

enum CardNumber {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}

export enum Action {
  skip = "skip",
  reverse = "reverse",
  drawTwo = "draw-2",
  drawFour = "draw-4",
}

export type UnoValue = CardNumber | Action;

export type UnoCard = {
  color: Color;
  value: UnoValue;
};

export enum Direction {
  clockwise = 1,
  anticlockwise = -1,
}
