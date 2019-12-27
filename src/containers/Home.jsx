import React from 'react';
import { connect } from 'react-redux';
import { setResultGame, setResetTimer, setBoadGame } from '../actions/index';
import { generateBoardMatrix } from '../config/index';
import GameStatus from './GameStatus';
import Board from './Board';
import ResultGame from '../components/ResultGame';
import Logo from '../assets/static/Logo.png';
import '../assets/styles/MinesWeeper.scss';

const Home = (props) => {
  const { setResultGame, resultGame, levelSelected, setResetTimer, setBoadGame } = props;

  const unMountComponent = () => {
    setResultGame(null);
  };

  const handleClickNewGame = () => {
    const { heigth, width, mines } = levelSelected;
    const boardData = generateBoardMatrix(heigth, width, mines);
    setBoadGame(boardData);
    setResetTimer(true);
  };
  return (
    <>
      <div className="btn-new-game"
        onClick={handleClickNewGame}>
        <span>Nuevo juego</span>
      </div>
      <section className="content">
        <img src={Logo} alt="buscaminas" />
        <div className="content-game">
          <div className="game-status-content">
            <GameStatus />
          </div>
          <div className="board-content">
            <Board />
          </div>
        </div>
      </section>
      {resultGame && (
        <ResultGame {...resultGame} unMountComponent={unMountComponent} />)}
    </>
  );
};

const mapStateToProps = ({ resultGame, levelSelected }) => ({
  resultGame,
  levelSelected,
});
const mapDispatchToProps = {
  setResultGame,
  setResetTimer,
  setBoadGame,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
