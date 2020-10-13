import React from 'react';

const Rectangle = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <rect fill={fill} width="260" height="160" x="20" y="70" />
  </svg>
);

export default Rectangle;
