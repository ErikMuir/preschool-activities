import { CardState, getCardImages } from './helpers';
import { mutateShuffle } from '../common/utils';

export default class Memory {
  /**
   * @param {Number} difficulty The number of matches on the game board
   * @param {Memory} copyFrom (Optional) The instance to clone
   */
  constructor({ difficulty, copyFrom }) {
    this.deck = [];

    if (copyFrom) {
      for (let i = 0; i < copyFrom.deck.length; i++) {
        const card = copyFrom.deck[i];
        this.deck.push(new Card(card.value, card.image, card.state));
      }
    } else {
      const images = getCardImages();
      for (let i = 0; i < difficulty; i++) {
        this.deck.push(new Card(i, images[i]));
        this.deck.push(new Card(i, images[i]));
      }
      mutateShuffle(this.deck);
    }
  }

  get flipped() {
    return this.deck.filter(card => card.state === CardState.flipped);
  }

  get isSolved() {
    return this.deck.every(card => card.state === CardState.matched);
  }
}

class Card {
  /**
   * @param {Number} value The value of the card
   * @param {Component} image The image on the front side of the card
   * @param {String} state The state of the card (defaults to CardState.faceDown)
   */
  constructor(value, image, state = CardState.faceDown) {
    this._value = value;
    this._image = image;
    this.state = state;
  }

  get value() { return this._value; }

  get image() { return this._image; }

  get isFaceDown() { return this.state === CardState.faceDown; }

  get isFlipped() { return this.state === CardState.flipped; }

  get isMatched() { return this.state === CardState.matched; }
}
