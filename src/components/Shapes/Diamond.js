import React from 'react';

const Diamond = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="150,20 225,150 150,280 75,150" />
  </svg>
);

export default Diamond;
