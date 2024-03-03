import { UnoCard } from "../types-interfaces";

export class Player {
  private name: string;
  hand: UnoCard[];

  constructor(name: string) {
    this.name = name;
    this.hand = [];
  }

  isOnlyCardInHand(): boolean {
    return this.hand.length === 1;
  }

  placeCard(cardIndex: number): UnoCard {
    const [card] = this.hand.splice(cardIndex, 1);
    return card;
  }

  drawCard(card: UnoCard): void {
    this.hand.push({ ...card });
  }

  cardsInHand(): UnoCard[] {
    return [...this.hand];
  }

  getDetails(): string {
    return this.name;
  }
}
