import React from 'react';

const SortingBar = (props) => {
  let color = '#efefef';

  switch (props.colorCode) {
    case 1:
      color = '#02E095';
      break;
    case 2:
      color = 'red';
      break;
    case 3:
      color = 'yellow';
      break;
    default:
      break;
  }

  return <div style={{...props.style, backgroundColor: color}}></div>;
};

export default SortingBar;
