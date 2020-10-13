import React from 'react';

const Circle = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <circle fill={fill} cx="150" cy="150" r="120" />
  </svg>
);

export default Circle;
