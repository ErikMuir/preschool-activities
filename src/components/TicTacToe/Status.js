import React from 'react';
import { player } from './helpers';

const Status = ({ board, xIsNext }) => {
  if (board.getWinner()) {
    return <div>Game Over!</div>;
  }

  if (board.isDraw()) {
    return <div>It's a Draw!</div>;
  }

  const nextPlayer = xIsNext ? player.X : player.O;
  return <div>Next Player: {nextPlayer}</div>;
};

export default Status;
