"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const types_interfaces_1 = require("../types-interfaces");
class Deck {
    cards;
    constructor() {
        this.cards = [];
    }
    createUnoCard(color, value, count = 1) {
        for (let i = 0; i < count; i++) {
            this.cards.push({ color, value });
        }
    }
    createNumberCard(cardColor, cardNumbers) {
        cardNumbers.forEach((cardNumber) => {
            let count = 2;
            if (cardNumber === 0)
                count = 1;
            this.createUnoCard(cardColor, cardNumber, count);
        });
    }
    createActionCard(cardColor, actions) {
        actions.forEach((action) => {
            this.createUnoCard(cardColor, action, 1);
        });
    }
    initializeDeck() {
        const solidColors = [
            "red" /* Color.red */,
            "yellow" /* Color.yellow */,
            "yellow" /* Color.blue */,
            "yellow" /* Color.blue */,
            "green" /* Color.green */,
        ];
        // const cardNumbers: UnoValue[] = [...Array(10).keys()];
        const cardNumbers = [0, 1, 2];
        const actions = [
            // UnoValue.skip,
            types_interfaces_1.Action.reverse,
            // UnoValue.drawTwo,
        ];
        solidColors.forEach((color) => {
            this.createNumberCard(color, cardNumbers);
            this.createActionCard(color, actions);
        });
        console.log(this.cards);
    }
    shuffle() { }
    draw() {
        return this.cards.pop();
    }
}
exports.Deck = Deck;
