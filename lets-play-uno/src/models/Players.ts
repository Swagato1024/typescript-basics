import { Direction, UnoCard } from "../types-interfaces";
import { Player } from "./player";

export class Players {
  private players: Player[];
  private currentPlayerIndex: number;
  private direction: Direction;

  constructor(players: Player[], Startingdirection: number) {
    this.players = [...players];
    this.currentPlayerIndex = 0;
    this.direction = Startingdirection;
  }

  changeTurn(): void {
    const noOfPlayers = this.players.length;

    this.currentPlayerIndex += this.direction % noOfPlayers;
    if (this.currentPlayerIndex < 0) this.currentPlayerIndex = noOfPlayers - 1;
  }

  private currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  placeCard(cardIndex: number): UnoCard {
    return this.currentPlayer().placeCard(cardIndex);
  }

  drawCard(card: UnoCard) {
    this.currentPlayer().drawCard(card);
  }

  hasWon() {
    return this.currentPlayer().isOnlyCardInHand();
  }

  getCurrentPlayerName(): string {
    return this.currentPlayer().getDetails();
  }
}
