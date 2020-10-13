import React, { PureComponent } from 'react';
import Card from './Card';
import styles from './memory.module';

export default class Board extends PureComponent {
  render() {
    const { board, handleClick } = this.props;

    if (!board) return null;
    
    return (
      <div className={styles.memory}>
        {board.deck.map((card, index) => (
          <Card key={index} index={index} card={card} onClick={handleClick} />
        ))}
      </div>
    );
  }
}
