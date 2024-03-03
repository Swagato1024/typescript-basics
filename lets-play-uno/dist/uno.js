"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = require("./models/Deck");
const Game_1 = require("./models/Game");
const Players_1 = require("./models/Players");
const player_1 = require("./models/player");
const types_interfaces_1 = require("./types-interfaces");
const main = () => {
    const deck = new Deck_1.Deck();
    deck.initializeDeck();
    const biswa = new player_1.Player("biswa");
    const sauma = new player_1.Player("sauma");
    const participants = [biswa, sauma];
    const players = new Players_1.Players(participants, types_interfaces_1.Direction.clockwise);
    const game = new Game_1.UnoGame(deck, players);
};
main();
