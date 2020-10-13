import svgShapes from '../Shapes';
import { copyShuffle, cssColors } from '../common/utils';

const Difficulty = {
  get easy() {
    return 5;
  },
  get medium() {
    return 10;
  },
  get hard() {
    return 20;
  },
};

const CardState = {
  get faceDown() {
    return 'facedown';
  },
  get flipped() {
    return 'flipped';
  },
  get matched() {
    return 'matched';
  },
};

const getCardImages = () => {
  const shapes = copyShuffle(svgShapes);
  const colors = copyShuffle(cssColors);
  const cardImages = [];
  // TODO : this is crap
  for (let i = 0; i < Difficulty.hard / 2; i++) {
    cardImages.push(shapes[i](colors[i]));
  }
  for (let i = 0; i < Difficulty.hard / 2; i++) {
    cardImages.push(shapes[i](colors[i + 1]));
  }
  return cardImages;
};



export { Difficulty, CardState, getCardImages };
