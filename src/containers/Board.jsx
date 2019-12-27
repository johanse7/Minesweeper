import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import { generateBoardMatrix, showBoarGameOver, getMines, getFlags, getEmptyCells, getCellsIsNotSelected } from '../config';
import { setBoadGame, updateNumberFalgs, setInitTimer, setResultGame } from '../actions';
import '../assets/styles/components/Board.scss';

const Board = (props) => {
  const { levelSelected,
    setBoadGame,
    board,
    updateNumberFalgs,
    setInitTimer,
    initTimer,
    setResultGame } = props;

  useEffect(() => {
    if (levelSelected && !board) {
      const { heigth, width, mines } = levelSelected;
      const boardData = generateBoardMatrix(heigth, width, mines);
      setBoadGame(boardData);
    }
  }, [levelSelected]);

  //Events
  const handleClickMenu = (e, { x, y }) => {
    e.preventDefault();
    const tempBoad = board;
    let { flags } = levelSelected;

    if (tempBoad[x][y].isSelection) return;

    if (!initTimer) {
      setInitTimer(true);
    }

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

    if (flags === 0) {
      const minesArray = getMines(board);
      const flagsArray = getFlags(board);

      if (JSON.stringify(minesArray) === JSON.stringify(flagsArray)) {
        const tempBoard = showBoarGameOver(board);
        setBoadGame([...tempBoard]);
        setInitTimer(false);
        setResultGame({ win: true, message: 'Ganaste!!' });
      }
    }
  };

  const handleClickCell = ({ x, y }) => {

    debugger
    if (board[x][y].isSelection || board[x][y].isFlag) return;

    if (!initTimer) {
      setInitTimer(true);
    }

    if (board[x][y].isMine) {
      const tempBoard = showBoarGameOver(board);
      setBoadGame([...tempBoard]);
      setInitTimer(false);
      setResultGame({ win: false, message: 'Game Over!!' });
      return;
    }

    const { mines, heigth, width } = levelSelected;
    let tempBoard = board;
    tempBoard[x][y].isSelection = true;

    if (tempBoard[x][y].mineNumber === 0) {
      tempBoard = getEmptyCells(x, y, heigth, width, tempBoard);
    }
    if (getCellsIsNotSelected(tempBoard).length === mines) {
      const boardInit = showBoarGameOver(board);
      setBoadGame([...boardInit]);
      setInitTimer(false);
      setResultGame({ win: true, message: 'Ganaste!!' });
      return;
    }
    setBoadGame([...tempBoard]);
  };
  //functions
  const buildBoard = ({ sizeX, sizeY }) => {
    return board.map((heigth, i) => (
      <div key={`content-${i}`} className="board-content-item">
        {heigth.map((data, j) => (
          <Cell
            key={`cell-${i}${j}`}
            sizeX={sizeX}
            sizeY={sizeY}
            {...data}
            handleMenu={(e) => handleClickMenu(e, { ...data })}
            handleClickCell={() => handleClickCell(data)}
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
const mapStateToProps = ({ board, levelSelected, initTimer }) => ({
  board,
  levelSelected,
  initTimer,
});

const mapDispatchToProps = {
  setBoadGame,
  updateNumberFalgs,
  setInitTimer,
  setResultGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

