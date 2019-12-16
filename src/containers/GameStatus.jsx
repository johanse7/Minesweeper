import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLevelSelected } from '../actions/index';
import LevelButton from '../components/LevelButton';

const GameStatus = (props) => {

  const { gameLevels, setLevelSelected } = props;
  const [gameStatus, gameSetStatus] = useState({
    selectedLevel: null,
  });

  useEffect(() => {
    gameSetStatus({
      selectedLevel: 1,
    });
  }, []);

  const isActive = (id) => {
    return gameStatus.selectedLevel === id;
  };
  //events
  const handleClickActiveLevel = (id) => {
    gameSetStatus({
      ...gameStatus,
      selectedLevel: id,
    });
    setLevelSelected(id);
  };

  return (
    <>
      {
        gameLevels.map((item) => (
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

const mapStateToProps = ({ gameLevels }) => ({
  gameLevels,
});

const mapDispatchToProps = {
  setLevelSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatus);
