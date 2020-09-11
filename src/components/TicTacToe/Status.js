import React, { PureComponent } from 'react';
import styles from '../../styles/tic-tac-toe.module';

export default class Status extends PureComponent {
  isWinner() {
    const { winningLine } = this.props.current;
    return !!(winningLine && winningLine.length);
  }

  isDraw() {
    const { board } = this.props.current;
    const squares = board.squares;
    return squares.every(square => square.value !== null);
  }

  getStatus() {
    if (this.isWinner()) return 'Game Over';

    if (this.isDraw()) return "It's a Draw!";

    return `Next Player: ${this.props.xIsNext ? 'X' : 'O'}`;
  }

  render() {
    return <div className={styles.status}>{this.getStatus()}</div>;
  }
}
