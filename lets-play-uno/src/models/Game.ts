import { Color, UnoCard, UnoValue } from "../types-interfaces";
import { Deck } from "./Deck";
import { Players } from "./Players";

export class UnoGame {
  private deck: Deck;
  private players: Players;
  private isGameOver: boolean;
  private winner: string;
  private currentColor: Color;
  private currentValue: UnoValue;

  constructor(deck: Deck, players: Players) {
    this.currentColor = Color.blue;
    this.currentValue = 1;
    this.isGameOver = false;
    this.deck = deck;
    this.players = players;
    this.winner = "";
  }

  private isPlaceableCard(card: UnoCard): boolean {
    const isColorMatches: boolean = this.currentColor === card.color;
    const isValueMatches: boolean = this.currentValue === card.value;

    return isColorMatches || isValueMatches;
  }

  placeCard(cardIndex: number) {
    // cardIndex is not a good way to indicate a card
    const card = this.players.placeCard(cardIndex);

    if (!this.isPlaceableCard(card)) return;

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
    if (card) this.players.drawCard(card);
  }

  statOf(player: string) {
    
  }
}
