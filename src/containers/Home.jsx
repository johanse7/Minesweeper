import React from 'react';
import GameStatus from './GameStatus';
import Board from './Board';
import Logo from '../assets/static/Logo.png';
import '../assets/styles/MinesWeeper.scss';

const Home = (props) => {
  return (
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
  );
};

export default Home;
