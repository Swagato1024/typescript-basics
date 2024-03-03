const enum Color = {red, yellow, blue, green};
enum CardNo = {zero, one, two, three, four, five, six, seven, eight, nine};

type Card = NumberCard | ActionCard | WildCard;

type UnoValue
interface Card {
  color: Color
  value: UnoValue
}

class Player {
  private name: string;
  private hand: Card[];
}

class Players {
  private players: Players[];
}

class Deck {
  private cards: UnoCard[];

  constructor() {
    this.cards = [];
  }

  initializeDeck() {
    createNumberCards();
    createActionCards();
    createWildCards();
  }

  shuffle() {}
}


class UnoGame {
  private deck;
  private players;
  private isGameOver;
  private winner;

  placeCard(card: Card) {
    if(!isPlaceableCard(card)) return;
    placeToDiscardPile(card);

    if(this.#players.hasWon()) {
      this.winner = this.players.getCurrentPlayer();
      return;
    }
  }

  drawCard() {

  }

  statOf(player: string) {

  }
}


players.placeCard();
players.drawCard();


[
  createUnoCard(UnoColor.red, 0, 1),
  createUnoCard(UnoColor.red, 1, 2),
  createUnoCard(UnoColor.red, 2, 2),
  createUnoCard(UnoColor.red, 3, ),
]




classes

Card
UnoColor
CardType {Number, wild, draw2, reverse, skip}
number

 private CardType.Color color;
    private CardType.Rank rank;
    private int number;


canPlayOn

