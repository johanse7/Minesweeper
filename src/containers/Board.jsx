import React from 'react';
import Cell from '../components/Cell';
import { generateBoardMatrix } from '../config';
import '../assets/styles/components/Board.scss';


const Board = (props) => {
  const { levelSelected } = props;

  //functions
  const buildBoard = ({ sizeX, sizeY, mines, width, heigth }) => {
    debugger
    const board = generateBoardMatrix(heigth, width);
    return board.map((heigth, i) => (
      <div key={`content-${i}`} className="board-content-item">
        {heigth.map((data, j) => <Cell key={`cell-${i}${j}`} sizeX={sizeX} sizeY={sizeY} {...data}/>)}
      </div>
    ));

  };

  return (
    <div className="board-content">
      {buildBoard(levelSelected)}
    </div>
  );
};

export default Board;

