import React from 'react';

const Oval = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <ellipse fill={fill} cx="150" cy="150" rx="130" ry="80" />
  </svg>
);

export default Oval;
