import React from 'react';

const Hexagon = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="150,40 260,95 260,205 150,260 40,205 40,95" />
  </svg>
);

export default Hexagon;
