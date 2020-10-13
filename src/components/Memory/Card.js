import React from 'react';
import { CardState } from './helpers';
import Texture1 from '../../images/texture1.png';
import styles from './memory.module';

const Card = ({ card, index, onClick }) => {
  const { image, state } = card;
  const cardStyle = state === CardState.faceDown ? styles.card : `${styles.card} ${styles.flipped}`;

  return (
    <div className={cardStyle}>
      <div className={styles.card_inner}>
        <div className={styles.card_back} onClick={() => onClick(index)}>
          <img src={Texture1} />
        </div>
        <div className={styles.card_front}>{image}</div>
      </div>
    </div>
  );
};

export default Card;
