import React from 'react';
import '../assets/styles/components/LevelBotton.scss';

const LevelButton = (props) => {

  const { onActiveLevel, text, isActive } = props;
  return (
    <div
      className={`level-button ${isActive ? 'level-button-active' : ''}`}
      onClick={onActiveLevel}
    >
      <span>{text}</span>
    </div>
  );
};

export default LevelButton;
