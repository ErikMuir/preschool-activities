const mutateShuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

const copyShuffle = arr => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
};

const cssColors = [
  'MidnightBlue',
  'Orange',
  'Orchid',
  'RebeccaPurple',
  'RoyalBlue',
  'SaddleBrown',
  'SeaGreen',
  'SlateGrey',
  'Tomato',
  'Turquoise',
  'Gold',
  'IndianRed',
  'DarkRed',
  'Aquamarine',
];

export {
  mutateShuffle,
  copyShuffle,
  cssColors,
};
