import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  renderHeader() {
    return (
      <h1 className="baseline-lg">
        Activities
      </h1>
    );
  }

  render() {
    return (
      <div className="home">
        {this.renderHeader()}
        <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
      </div>
    );
  }
}

export default Home;
