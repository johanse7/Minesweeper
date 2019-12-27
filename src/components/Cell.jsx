import React from 'react';
import boom from '../assets/static/boom.png';
import flag from '../assets/static/flag.png';
import '../assets/styles/components/Cell.scss';

const Cell = (props) => {

  const getValue = ({ isMine, isFlag, mineNumber, isSelection }) => {
    if (!isSelection) {
      return isFlag ? <img src={flag} alt="mine" /> : null;
    }
    if (isMine) {
      return <img src={boom} alt="mine" />;
    }
    if (mineNumber === 0) {
      return null;
    }
    return mineNumber;
  };

  const classCell = props.isSelection ? "cell-selected" : "cell-content";
  return (
    <div
      className={classCell}
      style={{ width: `${props.sizeX}px`, height: `${props.sizeY}px` }}
      onContextMenu={props.handleMenu}
      onClick={props.handleClickCell}
    >
      {getValue(props)}
    </div>
  );
};

export default Cell;
