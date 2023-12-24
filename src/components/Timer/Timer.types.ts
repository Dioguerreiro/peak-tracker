interface TimerProps {
  timer: number;
  setTimer: (timer: number) => void;
  isTimerRunning: boolean;
  setIsTimerRunning: (isRunning: boolean) => void;
  handleStart: () => void;
  handlePause: () => void;
  handleStop: () => void;
}

export default TimerProps;
