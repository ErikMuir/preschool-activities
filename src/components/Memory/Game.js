import React, { Component } from 'react';
import ActivityHeader from '../common/ActivityHeader';
import Controls from './Controls';
import Board from './Board';
import Memory from './Memory';
import { CardState } from './helpers';

export default class Game extends Component {
  constructor() {
    super();

    this.state = {
      board: null,
      moveCount: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  componentDidUpdate() {
    const { board } = this.state;
    if (board && board.flipped.length === 2) {
      this.matchOrReset(board);
    }
  }

  matchOrReset(board) {
    const newBoard = new Memory({ copyFrom: board });
    const { flipped } = newBoard;

    if (flipped[0].value === flipped[1].value) {
      flipped.forEach(card => (card.state = CardState.matched));
      this.setState({ board: newBoard });
    } else {
      flipped.forEach(card => (card.state = CardState.faceDown));
      setTimeout(() => this.setState({ board: newBoard }), 2000);
    }
  }

  setDifficulty(difficulty) {
    const board = new Memory({ difficulty });
    this.setState({ board, moveCount: 0 });
  }

  startOver() {
    this.setState({ board: null, moveCount: 0 });
  }

  handleClick(i) {
    const { board, moveCount } = this.state;
    const card = board.deck[i];

    if (card.isFaceDown && board.flipped.length < 2) {
      const newBoard = new Memory({ copyFrom: board });
      newBoard.deck[i].state = CardState.flipped;
      const newMoveCount = moveCount + board.flipped.length;
      this.setState({ board: newBoard, moveCount: newMoveCount });
    }
  }

  render() {
    const { board, moveCount } = this.state;
    return (
      <>
        <ActivityHeader activityName="Memory" />
        <Controls board={board} moveCount={moveCount} setDifficulty={this.setDifficulty} startOver={this.startOver} />
        <Board board={board} handleClick={this.handleClick} />
      </>
    );
  }
}
