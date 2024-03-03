import { Action, Color, UnoCard, UnoValue } from "../types-interfaces";

export class Deck {
  private cards: UnoCard[];

  constructor() {
    this.cards = [];
  }

  createUnoCard(color: Color, value: UnoValue, count = 1): void {
    for (let i = 0; i < count; i++) {
      this.cards.push({ color, value });
    }
  }

  createNumberCard(cardColor: Color, cardNumbers: UnoValue[]) {
    cardNumbers.forEach((cardNumber: UnoValue) => {
      let count = 2;
      if (cardNumber === 0) count = 1;

      this.createUnoCard(cardColor, cardNumber, count);
    });
  }

  createActionCard(cardColor: Color, actions: UnoValue[]) {
    actions.forEach((action: UnoValue) => {
      this.createUnoCard(cardColor, action, 1);
    });
  }

  initializeDeck(): void {
    const solidColors: Color[] = [
      Color.red,
      Color.yellow,
      Color.blue,
      Color.blue,
      Color.green,
    ];

    // const cardNumbers: UnoValue[] = [...Array(10).keys()];
    const cardNumbers: UnoValue[] = [0, 1, 2];
    const actions: UnoValue[] = [
      // UnoValue.skip,
      Action.reverse,
      // UnoValue.drawTwo,
    ];

    solidColors.forEach((color) => {
      this.createNumberCard(color, cardNumbers);
      this.createActionCard(color, actions);
    });

    console.log(this.cards);
  }

  shuffle() {}

  draw(): UnoCard | undefined {
    return this.cards.pop();
  }
}
