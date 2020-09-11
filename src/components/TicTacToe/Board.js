import React, { PureComponent } from 'react';
import Row from './Row';
import styles from '../../styles/tic-tac-toe.module';

export default class Board extends PureComponent {
  renderRow(row) {
    const { board, winningLine, onClick } = this.props;
    return <Row row={row} board={board} winningLine={winningLine} onClick={onClick} />;
  }

  render() {
    return (
      <div className={styles.game_board}>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
      </div>
    );
  }
}
