import React, { useState, useEffect } from 'react';
import LevelButton from '../components/LevelButton';
import gameLevels from '../config';

const GameStatus = (props) => {

  const [gameStatus, gameSetStatus] = useState({
    gameLevels: [],
  });

  useEffect(() => {
    gameSetStatus({
      gameLevels,
      selectedLevel: 1,
    });
  }, []);

  const isActive = (id) => {
    debugger
    return gameStatus.selectedLevel === id;
  };
  //events
  const handleClickActiveLevel = (id) => {
    gameSetStatus({
      ...gameStatus,
      selectedLevel: id,
    });
  };

  return (
    <>
      {
        gameStatus.gameLevels.map((item) => (
          <LevelButton
            key={`level${item.id}`}
            onActiveLevel={() => handleClickActiveLevel(item.id)}
            isActive={isActive(item.id)}
            {...item}
          />
        ))
      }
    </>
  );
};

export default GameStatus;
