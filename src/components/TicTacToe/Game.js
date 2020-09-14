import React, { Component } from 'react';
import ActivityHeader from '../common/ActivityHeader';
import Board from './Board';
import Status from './Status';
import Controls from './Controls';
import TicTacToe from './TicTacToe';
import styles from '../../styles/tic-tac-toe.module';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHistory: [
        {
          board: new TicTacToe(),
          winningLine: [],
          player: null,
          coords: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  getWinningLine(board) {
    const lines = [
      // horizontal
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // vertical
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // diagonal
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [[rowA, colA], [rowB, colB], [rowC, colC]] = lines[i];
      const squareA = board.squares.find(sq => sq.row === rowA && sq.col === colA);
      const squareB = board.squares.find(sq => sq.row === rowB && sq.col === colB);
      const squareC = board.squares.find(sq => sq.row === rowC && sq.col === colC);
      if (squareA.value && squareA.value === squareB.value && squareA.value === squareC.value) {
        return lines[i];
      }
    }

    return [];
  }

  handleClick(square) {
    const { gameHistory, stepNumber, xIsNext } = this.state;
    const currentHistory = gameHistory.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const board = new TicTacToe(current.board);
    if (current.winningLine.length || square.value) {
      return;
    }
    board.setSquareValue(square.row, square.col, xIsNext ? 'X' : 'O');
    const newHistory = [
      {
        board,
        winningLine: this.getWinningLine(board),
        player: xIsNext ? 'X' : 'O',
        coords: square.friendlyName,
      },
    ];
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
      gameHistory: [
        {
          board: new TicTacToe(),
          winningLine: [],
          player: null,
          coords: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    const { gameHistory, stepNumber, xIsNext } = this.state;
    const current = gameHistory[stepNumber];
    return (
      <>
        <ActivityHeader activityName="Tic-Tac-Toe" />
        <div className={styles.tic_tac_toe}>
          <div className={styles.header}>
            <button className={`${styles.button} ${styles.new_game}`} onClick={this.newGame}>
              New Game
            </button>
            <Status current={current} xIsNext={xIsNext} />
            <Controls stepsLength={gameHistory.length} stepNumber={stepNumber} jumpTo={this.jumpTo} />
          </div>
          <div className={styles.game}>
            <Board board={current.board} winningLine={current.winningLine} onClick={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}
