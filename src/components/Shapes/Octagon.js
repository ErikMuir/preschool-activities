import React from 'react';

const Octagon = fill => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <polygon fill={fill} points="105,40 195,40 260,105 260,195 195,260 105,260 40,195 40,105" />
  </svg>
);

export default Octagon;
