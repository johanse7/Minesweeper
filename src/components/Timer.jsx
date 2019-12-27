import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setResetTimer } from '../actions/index';
import timer from '../assets/static/timer.png';
import '../assets/styles/components/Timer.scss';

const Timer = (props) => {

  const { initTimer, resetTimer, setResetTimer } = props;

  const [timerState, setTimerState] = useState({
    minutes: 0,
    seconds: 0,
  });

  const intervalRef = useRef();
  useEffect(() => {
    if (resetTimer) {

      clearInterval(intervalRef.current);
      setTimerState({
        seconds: 0,
        minutes: 0,
      });
      setResetTimer(false);
      return;

    }
    if (!initTimer) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimerState({
        seconds: timerState.seconds === 59 ? 0 : timerState.seconds + 1,
        minutes: timerState.minutes + parseInt(((timerState.seconds + 1) / 60)),
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timerState, initTimer, resetTimer]);

  return (
    <div className="content-timer">
      <img src={timer} alt="timer" />
      <span>{`${timerState.minutes < 10 ? '0' : ''}${timerState.minutes}:${timerState.seconds < 10 ? '0' : ''}${timerState.seconds}`}</span>
    </div>
  );
};

const mapStateToProps = ({ initTimer, resetTimer }) => ({
  initTimer,
  resetTimer,
});

const mapDispatchToProps = {
  setResetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
