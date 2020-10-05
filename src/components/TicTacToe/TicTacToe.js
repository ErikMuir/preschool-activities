export default class TicTacToe {
  /**
   * @param {TicTacToe} copyFrom (Optional) The instance to clone
   */
  constructor(copyFrom) {
    const squares = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const square = new Square(row, col);
        // square.value = (row + col) % 2 == 0 ? 'X' : 'O'; // TODO : delete me!!!
        if (copyFrom instanceof TicTacToe) {
          const squareToClone = copyFrom.squares.find(sq => sq.row === row && sq.col === col);
          square.value = squareToClone.value;
        }
        squares.push(square);
      }
    }
    this.squares = squares;
    this._setWinningSquares();
  }

  /**
   * @param {Number} row The row of the square to update
   * @param {Number} col The column of the square to update
   * @param {Number} val The value to set for the square at the given row and column
   */
  setSquareValue(row, col, val) {
    this.squares.forEach(square => {
      if (square.row !== row || square.col !== col) return;
      square.value = val;
    });
    this._setWinningSquares();
  }

  getWinner() {
    const winningSquare = this.squares.find(sq => sq.isWinner);
    return winningSquare ? winningSquare.value : null;
  }

  isFull() {
    return this.squares.every(sq => sq.value);
  }

  isDraw() {
    return this.isFull() && !this.getWinner();
  }

  isGameOver() {
    return this.isFull() || !!this.getWinner();
  }

  _getLines() {
    const col1 = this.squares.filter(sq => sq.col === 0);
    const col2 = this.squares.filter(sq => sq.col === 1);
    const col3 = this.squares.filter(sq => sq.col === 2);
    const row1 = this.squares.filter(sq => sq.row === 0);
    const row2 = this.squares.filter(sq => sq.row === 1);
    const row3 = this.squares.filter(sq => sq.row === 2);
    const backslash = this.squares.filter(sq => sq.col === sq.row);
    const slash = [
      this.squares.find(sq => sq.col === 2 && sq.row === 0),
      this.squares.find(sq => sq.col === 1 && sq.row === 1),
      this.squares.find(sq => sq.col === 0 && sq.row === 2),
    ];
    return [col1, col2, col3, row1, row2, row3, slash, backslash];
  }

  _setWinningSquares() {
    this._getLines().forEach(line => {
      const [squareA, squareB, squareC] = line;
      if (squareA.value && squareA.value === squareB.value && squareA.value === squareC.value) {
        squareA.isWinner = true;
        squareB.isWinner = true;
        squareC.isWinner = true;
      }
    });
  }
}

class Square {
  /**
   * @param {Number} row The row of the tic-tac-toe board where the square will live
   * @param {Number} col The column of the tic-tac-toe board where the square will live
   */
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.value = null;
    this.isWinner = false;
  }
}
