import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LevelButton from '../components/LevelButton';
import LevelGame from '../components/LevelGame';
import Timer from '../components/Timer';
import { setLevelSelected, setResetTimer } from '../actions/index';

const GameStatus = (props) => {

  const { gameLevels, levelSelected, setLevelSelected, setResetTimer } = props;

  useEffect(() => {
    //InitSlected level 1 default
    setLevelSelected(1);
  }, []);

  const isActive = (id) => {
    return levelSelected.id === id;
  };
  //events
  const handleClickActiveLevel = (id) => {
    if (levelSelected.id !== id) {
      setLevelSelected(id);
      setResetTimer(true);
    }
  };

  return (
    <>
      <Timer />
      {levelSelected && (
        <>
          {gameLevels.map((item) => (
            <LevelButton
              key={`level${item.id}`}
              onActiveLevel={() => handleClickActiveLevel(item.id)}
              isActive={isActive(item.id)}
              {...item}
            />
          ))}
          <LevelGame levelSelected={levelSelected} />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ gameLevels, levelSelected }) => ({
  gameLevels,
  levelSelected,
});

const mapDispatchToProps = {
  setLevelSelected,
  setResetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatus);
