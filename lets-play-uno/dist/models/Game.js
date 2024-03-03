"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnoGame = void 0;
class UnoGame {
    deck;
    players;
    isGameOver;
    winner;
    currentColor;
    currentValue;
    constructor(deck, players) {
        this.currentColor = "yellow" /* Color.blue */;
        this.currentValue = 1;
        this.isGameOver = false;
        this.deck = deck;
        this.players = players;
        this.winner = "";
    }
    isPlaceableCard(card) {
        const isColorMatches = this.currentColor === card.color;
        const isValueMatches = this.currentValue === card.value;
        return isColorMatches || isValueMatches;
    }
    placeCard(cardIndex) {
        // cardIndex is not a good way to indicate a card
        const card = this.players.placeCard(cardIndex);
        if (!this.isPlaceableCard(card))
            return;
        if (this.players.hasWon()) {
            this.winner = this.players.getCurrentPlayerName();
            this.isGameOver = true;
            return;
        }
        this.currentColor = card.color;
        this.currentValue = card.value;
    }
    drawCard() {
        const card = this.deck.draw();
        if (card)
            this.players.drawCard(card);
    }
    statOf(player) {
    }
}
exports.UnoGame = UnoGame;
