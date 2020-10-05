import { Point, Line, drawLine } from '../common/CanvasHelpers';

const player = { X: 'X', O: 'O' };

const drawBoard = (ctx, boardSize, squareSize) => {
  ctx.strokeStyle = '#333333';
  drawLine(ctx, new Line(squareSize, 0, squareSize, boardSize));
  drawLine(ctx, new Line(squareSize * 2, 0, squareSize * 2, boardSize));
  drawLine(ctx, new Line(0, squareSize, boardSize, squareSize));
  drawLine(ctx, new Line(0, squareSize * 2, boardSize, squareSize * 2));
};

const drawSquare = (ctx, sq, size) => {
  const half = size / 2;
  const topLeft = new Point(size * sq.col, size * sq.row);
  const center = new Point(topLeft.x + half, topLeft.y + half);

  ctx.fillStyle = sq.isWinner ? '#00bb0022' : '#00000000';
  ctx.strokeStyle = sq.isWinner ? '#008800' : '#333333';
  ctx.fillRect(topLeft.x, topLeft.y, size, size);

  switch (sq.value) {
    case player.X:
      drawX(ctx, center, half);
      break;
    case player.O:
      drawO(ctx, center, half);
      break;
  }
};

const drawX = (ctx, center, size) => {
  const { x, y } = center;
  const half = size / 2;
  drawLine(ctx, new Line(x - half, y - half, x + half, y + half));
  drawLine(ctx, new Line(x + half, y - half, x - half, y + half));
};

const drawO = (ctx, center, size) => {
  const { x, y } = center;
  const r = size / 2;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
};

export { player, drawBoard, drawSquare };
