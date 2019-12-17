import React from 'react';
import boom from '../assets/static/boom.png';
import flag from '../assets/static/flag.png';
import '../assets/styles/components/LevelGame.scss';

const LevelGame = (props) => {
  const { levelSelected } = props;
  return (
    <div className="level-game-content">
      {levelSelected && (
        <>
          <h1>{`Nivel ${levelSelected.text}`}</h1>
          <div className="level-game-mine">
            <img src={boom} width="50" height="50" alt="boom" />
            <span>{levelSelected.mines}</span>
          </div>
          <div className="level-game-mine">
            <img src={flag} width="50" height="50" alt="boom" />
            <span>{levelSelected.flags}</span>
          </div>
        </>
      )}

    </div>
  );
};

export default LevelGame;
