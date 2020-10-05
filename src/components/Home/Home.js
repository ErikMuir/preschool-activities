import React, { PureComponent } from 'react';
import ActivityCard from '../common/ActivityCard';
import TicTacToeImage from '../../images/tic-tac-toe.png';
import MemoryImage from '../../images/memory.png';
import styles from './home.module';

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h1 className={styles.header}>Activities</h1>
        <div className={styles.activity_grid}>
          <ActivityCard path="/tic-tac-toe" name="Tic-Tac-Toe" image={TicTacToeImage} />
          <ActivityCard path="/memory" name="Memory" image={MemoryImage} />
        </div>
      </div>
    );
  }
}

export default Home;
