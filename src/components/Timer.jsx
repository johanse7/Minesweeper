import React from 'react';
import timer from '../assets/static/timer.png';
import '../assets/styles/components/Timer.scss';

const Timer = (props) => {
  return (
    <div className="content-timer">
      <img src={timer} alt="timer" />
      <span>10:05</span>
    </div>
  );
};

export default Timer;
