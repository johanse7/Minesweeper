import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import { generateBoardMatrix } from '../config';
import { setBoadGame } from '../actions';
import '../assets/styles/components/Board.scss';

const Board = (props) => {
  const { levelSelected, setBoadGame, board } = props;

  useEffect(() => {
    if (levelSelected) {
      const { heigth, width, mines } = levelSelected;
      const boardData = generateBoardMatrix(heigth, width, mines);
      setBoadGame(boardData);
    }
  }, [levelSelected]);

  //functions
  const buildBoard = ({ sizeX, sizeY }) => {

    return board.map((heigth, i) => (
      <div key={`content-${i}`} className="board-content-item">
        {heigth.map((data, j) => <Cell key={`cell-${i}${j}`} sizeX={sizeX} sizeY={sizeY} {...data} />)}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

