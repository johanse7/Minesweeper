import React from 'react';
import boom from '../assets/static/boom.png';
import flag from '../assets/static/flag.png';
import '../assets/styles/components/Cell.scss';

const Cell = (props) => {

  const getValue = ({ isMine, isFlag, mineNumber, isSelection }) => {
    if (isMine) {
      return <img src={boom} alt="mine" />;
    }
    if (!isSelection) {
      return isFlag ? <img src={flag} alt="mine" /> : null;
    }
    if (mineNumber === 0) {
      return null;
    }
    return mineNumber;
  };

  return (
    <div className="cell-content" style={{ width: `${props.sizeX}px`, height: `${props.sizeY}px` }}>
      {getValue(props)}
    </div>
  );
};

export default Cell;
