import React from 'react';
import { connect } from 'react-redux';
import GameStatus from './GameStatus';
import LevelGame from '../components/LevelGame';
import Board from './Board';
import Logo from '../assets/static/Logo.png';
import '../assets/styles/MinesWeeper.scss';

const Home = (props) => {
  const { gameLevels, levelSelected } = props;
  return (
    <section className="content">
      <img src={Logo} alt="buscaminas" />
      <div className="content-game">
        <div className="game-status-content">
          <GameStatus gameLevels={gameLevels} levelSelected={levelSelected} />
          <LevelGame levelSelected={levelSelected} />
        </div>
        <div className="board-content">
          {levelSelected &&
            <Board levelSelected={levelSelected} />}
        </div>

      </div>
    </section>
  );
};

const mapStateToProps = ({ gameLevels, levelSelected }) => ({
  gameLevels,
  levelSelected,
});

export default connect(mapStateToProps, null)(Home);
