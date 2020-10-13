import React from 'react';

const Pentagon = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="150,30 270,130 220,270 80,270 30,130" />
  </svg>
);

export default Pentagon;
