import React from 'react';
import boom from '../assets/static/boom.png';
import flag from '../assets/static/flag.png';

const Cell = (props) => {

  const getValue = ({ sizeX, sizeY, isMine, isFlag, mineNumber, isSelection }) => {
    if (isMine) {
      return <img src={boom} alt="mine" width={sizeX} height={sizeY} />;
    }
    if (!isSelection) {
      return isFlag ? <img src={flag} alt="mine" width={sizeX} height={sizeY} /> : null;
    }
    if (mineNumber === 0) {
      return null;
    }

    return mineNumber;
  };

  return (
    <div className="cell-content" style={{ width: sizeX, height: sizeY }}>
      {getValue(props)}
    </div>
  );
};

export default Cell;
