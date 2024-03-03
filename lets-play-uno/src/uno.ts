import { Deck } from "./models/Deck";
import { UnoGame } from "./models/Game";
import { Players } from "./models/Players";
import { Player } from "./models/player";
import { Direction } from "./types-interfaces";

const main = (): void => {
  const deck = new Deck();
  deck.initializeDeck();
  const biswa = new Player("biswa");
  const sauma = new Player("sauma");

  const participants: Player[] = [biswa, sauma];

  const players = new Players(participants, Direction.clockwise);

  const game = new UnoGame(deck, players);

};

main();
