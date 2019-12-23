import React, { useState, useEffect } from 'react';
import timer from '../assets/static/timer.png';
import '../assets/styles/components/Timer.scss';

const Timer = (props) => {

  const [timerState, setTimerState] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerState({
        seconds: timerState.seconds === 59 ? 0 : timerState.seconds + 1,
        minutes: timerState.minutes + parseInt(((timerState.seconds + 1) / 60)),
      });

    }, 1000);
    return () => clearInterval(intervalId);
  }, [timerState])




  return (
    <div className="content-timer">
      <img src={timer} alt="timer" />
      <span>{`${timerState.minutes < 10 ? '0' : ''}${timerState.minutes}:${timerState.seconds < 10 ? '0' : ''}${timerState.seconds}`}</span>
    </div>
  );
};

export default Timer;
