import React from 'react';

const Square = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <rect fill={fill} width="200" height="200" x="50" y="50" />
  </svg>
);

export default Square;
