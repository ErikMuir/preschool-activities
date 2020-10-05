import React, { Component } from 'react';
import ActivityHeader from '../common/ActivityHeader';
import CanvasContainer from '../common/CanvasContainer';
import Status from './Status';
import Controls from './Controls';
import TicTacToe from './TicTacToe';
import { player, drawBoard, drawSquare } from './helpers';
import styles from './tic-tac-toe.module';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameHistory: [{ board: new TicTacToe() }],
      stepNumber: 0,
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
    this.newGame = this.newGame.bind(this);
    this.draw = this.draw.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getPosition(val, squareSize) {
    if (val < squareSize) return 0;
    if (val < squareSize * 2) return 1;
    return 2;
  }

  onClick(e) {
    const { devicePixelRatio: ratio = 1 } = window;
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    const squareSize = (rect.width / 3) / ratio;
    const x = (e.clientX - rect.left) / ratio;
    const y = (e.clientY - rect.top) / ratio;
    const col = this.getPosition(x, squareSize);
    const row = this.getPosition(y, squareSize);
    this.handleClick(col, row);
  }

  handleClick(col, row) {
    const { gameHistory, stepNumber, xIsNext } = this.state;
    const currentHistory = gameHistory.slice(0, stepNumber + 1);
    const currentBoard = currentHistory[currentHistory.length - 1].board;
    const square = currentBoard.squares.find(sq => sq.col === col && sq.row === row);
    if (square.value || currentBoard.getWinner()) {
      return;
    }
    const board = new TicTacToe(currentBoard);
    board.setSquareValue(square.row, square.col, xIsNext ? player.X : player.O);
    const newHistory = [{ board }];
    this.setState({
      gameHistory: currentHistory.concat(newHistory),
      stepNumber: currentHistory.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  }

  newGame() {
    this.setState({
      gameHistory: [{ board: new TicTacToe() }],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  draw(ctx) {
    const { gameHistory, stepNumber } = this.state;
    const currentHistory = gameHistory.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const board = current.board;
    const { devicePixelRatio: ratio = 1 } = window;
    const boardSize = ctx.canvas.width / ratio;
    const squareSize = boardSize / 3;

    ctx.lineWidth = 2;
    board.squares.forEach(sq => drawSquare(ctx, sq, squareSize));
    drawBoard(ctx, boardSize, squareSize);
  }

  render() {
    const { gameHistory, stepNumber, xIsNext } = this.state;
    const currentBoard = gameHistory[stepNumber].board;
    return (
      <>
        <ActivityHeader activityName="Tic-Tac-Toe" />
        <div className={styles.tic_tac_toe}>
          <div className={styles.header}>
            <Controls
              stepsLength={gameHistory.length}
              stepNumber={stepNumber}
              newGame={this.newGame}
              jumpTo={this.jumpTo}
            />
            <Status board={currentBoard} xIsNext={xIsNext} />
          </div>
          <CanvasContainer draw={this.draw} className={styles.tic_tac_toe_canvas_container} onClick={this.onClick} />
        </div>
      </>
    );
  }
}
