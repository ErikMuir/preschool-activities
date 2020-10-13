import React, { Component } from 'react';
import { Difficulty } from './helpers';
import styles from './memory.module';

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  renderDifficulties() {
    const { setDifficulty } = this.props;
    return (
      <>
        <button type="button" className={styles.button} onClick={() => setDifficulty(Difficulty.easy)}>
          Easy
        </button>
        <button type="button" className={styles.button} onClick={() => setDifficulty(Difficulty.medium)}>
          Medium
        </button>
        <button type="button" className={styles.button} onClick={() => setDifficulty(Difficulty.hard)}>
          Hard
        </button>
      </>
    );
  }

  renderMoveCount() {
    const { moveCount } = this.props;
    const label = moveCount === 1 ? "try" : "tries";
    return <div className={styles.move_count}>{moveCount} {label}</div>;
  }

  renderGameOver() {
    const { moveCount, startOver } = this.props;
    return (
      <>
        <div className={styles.move_count}>Great job! You solved the puzzle in {moveCount} tries!</div>
        <button type="button" className={styles.button} onClick={startOver}>
          Start Over
        </button>
      </>
    );
  }

  getContent() {
    const { board } = this.props;
    if (!board) {
      return this.renderDifficulties();
    }
    if (board.isSolved) {
      return this.renderGameOver();
    }
    return this.renderMoveCount();
  }

  render() {
    return <div className={styles.controls}>{this.getContent()}</div>;
  }
}
