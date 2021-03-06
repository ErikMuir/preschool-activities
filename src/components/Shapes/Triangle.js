import React from 'react';

const Triangle = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="150,30 270,250 30,250" />
  </svg>
);

export default Triangle;
