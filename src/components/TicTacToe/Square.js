import React, { PureComponent } from 'react';
import styles from '../../styles/tic-tac-toe.module';

export default class Square extends PureComponent {
  isWinningSquare() {
    const { square, winningLine } = this.props;
    return winningLine.some(x => x[0] === square.row && x[1] === square.col);
  }

  render() {
    const { square, onClick } = this.props;
    const key = `square__${square.row}-${square.col}`;
    const classNames = `${styles.square} ${(this.isWinningSquare() ? styles.winning_square : '')}`;
    return (
      <button key={key} className={classNames} onClick={() => onClick(square)}>
        {square.value}
      </button>
    );
  }
}
