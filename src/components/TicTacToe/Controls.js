import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';

export default class Controls extends PureComponent {
  renderUndo() {
    const { stepNumber, jumpTo } = this.props;
    const targetStep = stepNumber - 1;
    const isDisabled = stepNumber === 0;
    return (
      <button className="button undo-redo" disabled={isDisabled} onClick={() => jumpTo(targetStep)} title="Undo">
        <MaterialIcon icon="undo" color="#fafafa" />
      </button>
    );
  }

  renderRedo() {
    const { history, stepNumber, jumpTo } = this.props;
    const targetStep = stepNumber + 1;
    const isDisabled = stepNumber === history.length - 1;
    return (
      <button className="button undo-redo" disabled={isDisabled} onClick={() => jumpTo(targetStep)} title="Redo">
        <MaterialIcon icon="redo" color="#fafafa" />
      </button>
    );
  }

  render() {
    return (
      <div className="game-controls">
        {this.renderUndo()}
        {this.renderRedo()}
      </div>
    );
  }
}
