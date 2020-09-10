import React, { PureComponent } from 'react';
import Square from './Square';

export default class Row extends PureComponent {
  renderSquare(col) {
    const { row, board, winningLine, onClick } = this.props;
    const square = board.squares.find(sq => sq.row === row && sq.col === col);
    return <Square square={square} winningLine={winningLine} onClick={onClick} />;
  }

  render() {
    return (
      <div key={`board-row__${this.props.row}`} className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
    );
  }
}
