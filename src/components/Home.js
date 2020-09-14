import React, { Component } from 'react';
import ActivityCard from './common/ActivityCard';
import TicTacToeImage from '../images/tic-tac-toe.png';
import styles from '../styles/home.module';

class Home extends Component {
  renderHeader() {
    return (
      <h1 className={styles.header}>
        Activities
      </h1>
    );
  }

  render() {
    return (
      <div className="home">
        {this.renderHeader()}
        <div className={styles.activity_grid}>
          <ActivityCard path="/tic-tac-toe" name="Tic-Tac-Toe" image={TicTacToeImage} />
        </div>
      </div>
    );
  }
}

export default Home;
