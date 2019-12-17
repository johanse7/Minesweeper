import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLevelSelected } from '../actions/index';
import LevelButton from '../components/LevelButton';

const GameStatus = (props) => {

  const { gameLevels, levelSelected, setLevelSelected } = props;

  useEffect(() => {
    //InitSlected level 1 default
    setLevelSelected(1);
  }, []);

  const isActive = (id) => {
    return levelSelected.id === id;
  };
  //events
  const handleClickActiveLevel = (id) => {
    setLevelSelected(id);
  };

  return (
    <>
      {levelSelected &&
        gameLevels.map((item) => (
          <LevelButton
            key={`level${item.id}`}
            onActiveLevel={() => handleClickActiveLevel(item.id)}
            isActive={isActive(item.id)}
            {...item}
          />
        ))}
    </>
  );
};

const mapDispatchToProps = {
  setLevelSelected,
};

export default connect(null, mapDispatchToProps)(GameStatus);
