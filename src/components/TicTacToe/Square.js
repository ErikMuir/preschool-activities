import React, { PureComponent } from 'react';

export default class Square extends PureComponent {
  isWinningSquare() {
    const { square, winningLine } = this.props;
    return winningLine.some(x => x[0] === square.row && x[1] === square.col);
  }

  render() {
    const { square, onClick } = this.props;
    const key = `square__${square.row}-${square.col}`;
    const styles = `square ${this.isWinningSquare() ? 'winning-square' : ''}`;
    return (
      <button key={key} className={styles} onClick={() => onClick(square)}>{square.value}</button>
    );
  }
}
