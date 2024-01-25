import { useState, useEffect } from 'react';
import PlayerRunningDistanceProps from './RunningDistance.types';

const RunningDistanceSimulator: React.FC<PlayerRunningDistanceProps> = ({isTimerRunning}) => {
  const [distance, setDistance] = useState(0);

  const simulateDistance = () => {
    const speed = 5;
    setDistance((prevDistance) => prevDistance + speed * 10);
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateDistance, 10000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, distance]);

  return (
    <div className='bg-white rounded-xl p-10 flex flex-col gap-7 h-fit'>
      <h2 className='text-3xl font-bold'>Total Distance</h2>
      <p className='text-2xl '>{distance} m</p>
    </div>
  );
};

export default RunningDistanceSimulator;
