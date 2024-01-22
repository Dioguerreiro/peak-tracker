import React, { useEffect } from "react";
import TimerProps from "./Timer.types";
import {
  faPlayCircle,
  faPauseCircle,
  faStopCircle,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timer: React.FC<TimerProps> = ({
  timer,
  setTimer,
  isTimerRunning,
  setIsTimerRunning,
  handleStart,
  handlePause,
  handleStop,
}) => {
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
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="bg-white flex items-center justify-center rounded-xl p-2 gap-2 w-fit">
      {isTimerRunning ? (
        <button onClick={handlePause}>
          <FontAwesomeIcon icon={faPauseCircle} className="text-4xl" />
        </button>
      ) : (
        <button onClick={handleStart} disabled={isTimerRunning}>
          <FontAwesomeIcon icon={faPlayCircle} className="text-4xl" />
        </button>
      )}
      <button onClick={handleStop}>
        <FontAwesomeIcon icon={faStopCircle} className="text-4xl" />
      </button>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Timer;
