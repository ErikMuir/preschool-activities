import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';
import styles from './tic-tac-toe.module';

export default class Controls extends PureComponent {
  renderNewGame() {
    const { newGame } = this.props;
    return (
      <button className={styles.button} onClick={() => newGame()} title="New Game">
        <MaterialIcon icon="autorenew" color="#fafafa" />
      </button>
    );
  }

  renderUndo() {
    const { stepNumber, jumpTo } = this.props;
    const targetStep = stepNumber - 1;
    const isDisabled = stepNumber === 0;
    return (
      <button className={styles.button} disabled={isDisabled} onClick={() => jumpTo(targetStep)} title="Undo">
        <MaterialIcon icon="undo" color="#fafafa" />
      </button>
    );
  }

  renderRedo() {
    const { stepsLength, stepNumber, jumpTo } = this.props;
    const targetStep = stepNumber + 1;
    const isDisabled = stepNumber === stepsLength - 1;
    return (
      <button className={styles.button} disabled={isDisabled} onClick={() => jumpTo(targetStep)} title="Redo">
        <MaterialIcon icon="redo" color="#fafafa" />
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderNewGame()}
        {this.renderUndo()}
        {this.renderRedo()}
      </div>
    );
  }
}
