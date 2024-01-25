import { useState, useEffect } from "react";
import PlayerRunningSpeedProps from "./RunningSpeed.types";

const RunningSpeed: React.FC<PlayerRunningSpeedProps> = ({
  isTimerRunning,
}) => {
  const acceleration = 0.1; // Base acceleration
  const deceleration = 0.2; // Base deceleration
  const accelerationVariation = 0.05; // Random acceleration variation
  const decelerationVariation = 0.1; // Random deceleration variation
  const minSpeedLimit = 2 / 3.6; // Min speed limit in m/s (2 km/h)
  const maxSpeedLimit = 40 / 3.6; // Max speed limit in m/s (40 km/h)

  const [speed, setSpeed] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);

  const simulateSpeed = () => {
    // Add randomness to acceleration and deceleration
    const randomAcceleration =
      acceleration + Math.random() * accelerationVariation;
    const randomDeceleration =
      deceleration + Math.random() * decelerationVariation;

    // Simulate acceleration or deceleration randomly
    const randomDirection = Math.random() < 0.5 ? -1 : 1;
    const accelerationOrDeceleration =
      randomDirection === 1 ? randomAcceleration : -randomDeceleration;

    // Simulate speed change
    const newSpeed = Math.max(
      Math.min(speed + accelerationOrDeceleration, maxSpeedLimit),
      minSpeedLimit
    );

    // Update the speed and maxSpeed
    setSpeed(newSpeed);
    setMaxSpeed((prevMaxSpeed) => Math.max(newSpeed, prevMaxSpeed));
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateSpeed, 1000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, speed, maxSpeed]);

  return (
    <div className="bg-white rounded-xl p-10 flex flex-col gap-7 h-fit">
      <h2 className="text-3xl font-bold">Current Speed</h2>
      <p className="text-2xl ">{speed.toFixed(2)} km/s</p>
      <h2 className="text-3xl font-bold">Max Speed</h2>
      <p className="text-2xl ">{maxSpeed.toFixed(2)} km/s</p>
    </div>
  );
};

export default RunningSpeed;
