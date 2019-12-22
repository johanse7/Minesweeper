import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import { generateBoardMatrix } from '../config';
import { setBoadGame, updateNumberFalgs } from '../actions';
import '../assets/styles/components/Board.scss';

const Board = (props) => {
  const { levelSelected, setBoadGame, board, updateNumberFalgs } = props;

  useEffect(() => {
    if (levelSelected && !board) {
      const { heigth, width, mines } = levelSelected;
      const boardData = generateBoardMatrix(heigth, width, mines);
      setBoadGame(boardData);
    }
  }, [levelSelected]);

  //Events
  const handleClickMenu = (e, { x, y }) => {
    debugger
    e.preventDefault();
    const tempBoad = board;
    let { flags } = levelSelected;

    if (tempBoad[x][y].isSelection) return;
    if (tempBoad[x][y].isFlag) {
      tempBoad[x][y].isFlag = false;
      flags++;
    } else {
      if (flags === 0) return;

      tempBoad[x][y].isFlag = true;
      flags--;
    }

    updateNumberFalgs(flags);
    setBoadGame([...tempBoad]);
  };
  //functions
  const buildBoard = ({ sizeX, sizeY }) => {
    debugger
    return board.map((heigth, i) => (
      <div key={`content-${i}`} className="board-content-item">
        {heigth.map((data, j) => (
          <Cell
            key={`cell-${i}${j}`}
            sizeX={sizeX}
            sizeY={sizeY}
            {...data}
            handleMenu={(e) => handleClickMenu(e, { ...data })}
          />
        ))}
      </div>
    ));

  };

  return (
    <div className="board-content">
      {board &&
        buildBoard(levelSelected)}
    </div>
  );
};
const mapStateToProps = ({ board, levelSelected }) => ({
  board,
  levelSelected,
});

const mapDispatchToProps = {
  setBoadGame,
  updateNumberFalgs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

