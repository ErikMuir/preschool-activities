import React from 'react';

const Star = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="150,30 75,270 270,115 30,115 225,270" />
  </svg>
);

export default Star;
