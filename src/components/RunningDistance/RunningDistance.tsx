import { useState, useEffect } from "react";
import PlayerRunningDistanceProps from "./RunningDistance.types";
import { usePlayerStatsContext } from "../../context/PlayerStatsContext.context";

const RunningDistanceSimulator: React.FC<PlayerRunningDistanceProps> = ({
  isTimerRunning,
  player,
  selectedPlayer,
}) => {
  const { distance, setDistance } = usePlayerStatsContext();

  const simulateDistance = () => {
    const speed = 5;
    distance[player.number] = distance[player.number] + speed * 10;
    setDistance(distance);
  };

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
    <>
      {player.number === selectedPlayer && (
        <div className="bg-white rounded-xl p-10 flex flex-col gap-7 h-fit">
          <h2 className="text-3xl font-bold">Total Distance</h2>
          <p className="text-2xl ">{distance[player.number]} m</p>
        </div>
      )}
    </>
  );
};

export default RunningDistanceSimulator;
