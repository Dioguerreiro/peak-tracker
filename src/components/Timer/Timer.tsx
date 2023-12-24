import React, { useEffect } from 'react';
import TimerProps from './Timer.types';

const Timer: React.FC<TimerProps> = ({timer, setTimer, isTimerRunning, setIsTimerRunning, handleStart, handlePause, handleStop}) => {

  useEffect(() => {
    let intervalId: any;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer(timer + 1);
      }, 1000); // Update every 1 second
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning, timer]);

  // Format the timer for display
  const formattedTime = new Date(timer * 1000).toISOString().slice(14, 19);

  return (
    <div>
      <h2>Timer: {formattedTime}</h2>
      <button onClick={handleStart} disabled={isTimerRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isTimerRunning}>
        Pause
      </button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
