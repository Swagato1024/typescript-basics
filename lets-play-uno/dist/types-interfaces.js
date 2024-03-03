"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Action = void 0;
var CardNumber;
(function (CardNumber) {
    CardNumber[CardNumber["zero"] = 0] = "zero";
    CardNumber[CardNumber["one"] = 1] = "one";
    CardNumber[CardNumber["two"] = 2] = "two";
    CardNumber[CardNumber["three"] = 3] = "three";
    CardNumber[CardNumber["four"] = 4] = "four";
    CardNumber[CardNumber["five"] = 5] = "five";
    CardNumber[CardNumber["six"] = 6] = "six";
    CardNumber[CardNumber["seven"] = 7] = "seven";
    CardNumber[CardNumber["eight"] = 8] = "eight";
    CardNumber[CardNumber["nine"] = 9] = "nine";
})(CardNumber || (CardNumber = {}));
var Action;
(function (Action) {
    Action["skip"] = "skip";
    Action["reverse"] = "reverse";
    Action["drawTwo"] = "draw-2";
    Action["drawFour"] = "draw-4";
})(Action || (exports.Action = Action = {}));
var Direction;
(function (Direction) {
    Direction[Direction["clockwise"] = 1] = "clockwise";
    Direction[Direction["anticlockwise"] = -1] = "anticlockwise";
})(Direction || (exports.Direction = Direction = {}));
