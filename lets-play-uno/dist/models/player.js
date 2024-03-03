"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    name;
    hand;
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    isOnlyCardInHand() {
        return this.hand.length === 1;
    }
    placeCard(cardIndex) {
        const [card] = this.hand.splice(cardIndex, 1);
        return card;
    }
    drawCard(card) {
        this.hand.push({ ...card });
    }
    cardsInHand() {
        return [...this.hand];
    }
    getDetails() {
        return this.name;
    }
}
exports.Player = Player;
