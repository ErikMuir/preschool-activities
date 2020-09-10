export default class TicTacToe {
  /**
   * @param {TicTacToe} board (Optional) The board to clone
   */
  constructor(board) {
    const squares = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const square = new Square(row, col);
        if (board instanceof TicTacToe) {
          const squareToClone = board.squares.find(sq => sq.row === row && sq.col === col);
          square.value = squareToClone.value;
        }
        squares.push(square);
      }
    }
    this.squares = squares;
    this.winningLine = []; // ???
  }

  /**
   * @param {Number} row The row of the square to update
   * @param {Number} col The column of the square to update
   * @param {Number} val The value to set for the square at the given row and column
   */
  setSquareValue(row, col, val) {
    this.squares.forEach(square => {
      if (square.row !== row || square.col !== col)
        return;
      square.value = val;
    })
  }
}

class Square {
  /**
   * @param {Number} row The row of the tic-tac-toe board where the square will live
   * @param {Number} col The column of the tic-tac-toe board where the square will live
   */
  constructor(row, col) {
    let errors = [];

    if (row === undefined || row === null)
      errors.push('row is required');
    else if (row < 0) 
      errors.push('row cannot be less than 0');
    else if (row > 2)
      errors.push('row cannot be greater than 2');

    if (col === undefined || col === null) 
      errors.push('col is required');
    else if (col < 0)
      errors.push('col cannot be less than 0');
    else if (col > 2) 
      errors.push('col cannot be greater than 2');

    if (errors.length)
      throw new Error(errors.join(', '));

    this.row = row;
    this.col = col;
    this.value = null;
    this.friendlyName = this.getFriendlyName();
    this.isWinningSquare = false; // ???
  }

  getFriendlyName() {
    if (this.row === 1 && this.col === 1) {
      return "middle";
    }

    const rowNames = ["top", "middle", "bottom"];
    const colNames = ["left", "middle", "right"];

    return `${rowNames[this.row]}-${colNames[this.col]}`;
  }
}
