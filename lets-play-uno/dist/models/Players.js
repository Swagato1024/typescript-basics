"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = void 0;
class Players {
    players;
    currentPlayerIndex;
    direction;
    constructor(players, Startingdirection) {
        this.players = [...players];
        this.currentPlayerIndex = 0;
        this.direction = Startingdirection;
    }
    changeTurn() {
        const noOfPlayers = this.players.length;
        this.currentPlayerIndex += this.direction % noOfPlayers;
        if (this.currentPlayerIndex < 0)
            this.currentPlayerIndex = noOfPlayers - 1;
    }
    currentPlayer() {
        return this.players[this.currentPlayerIndex];
    }
    placeCard(cardIndex) {
        return this.currentPlayer().placeCard(cardIndex);
    }
    drawCard(card) {
        this.currentPlayer().drawCard(card);
    }
    hasWon() {
        return this.currentPlayer().isOnlyCardInHand();
    }
    getCurrentPlayerName() {
        return this.currentPlayer().getDetails();
    }
}
exports.Players = Players;
