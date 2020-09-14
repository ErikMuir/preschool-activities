import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';
import styles from '../../styles/tic-tac-toe.module';

export default class Controls extends PureComponent {
  renderUndo() {
    const { stepNumber, jumpTo } = this.props;
    const targetStep = stepNumber - 1;
    const isDisabled = stepNumber === 0;
    return (
      <button
        className={`${styles.button} ${styles.undo_redo}`}
        disabled={isDisabled}
        onClick={() => jumpTo(targetStep)}
        title="Undo"
      >
        <MaterialIcon icon="undo" color="#fafafa" />
      </button>
    );
  }

  renderRedo() {
    const { stepsLength, stepNumber } = this.props;
    const targetStep = stepNumber + 1;
    const isDisabled = stepNumber === stepsLength - 1;
    return (
      <button
        className={`${styles.button} ${styles.undo_redo}`}
        disabled={isDisabled}
        onClick={() => jumpTo(targetStep)}
        title="Redo"
      >
        <MaterialIcon icon="redo" color="#fafafa" />
      </button>
    );
  }

  render() {
    return (
      <div className={styles.game_controls}>
        {this.renderUndo()}
        {this.renderRedo()}
      </div>
    );
  }
}
