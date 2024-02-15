import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PlayerBodyTemperatureProps from "./PlayerBodyTemperature.types";
import { usePlayerStatsContext } from "../../context/PlayerStatsContext.context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PlayerBodyTemperature: React.FC<PlayerBodyTemperatureProps> = ({
  isTimerRunning,
  player,
  selectedPlayer,
}) => {
  const { bodyTemperature, setBodyTemperature, labels, setLabels } =
    usePlayerStatsContext();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Body Temperature",
      },
    },
  };

  const data = {
    labels: labels[player.number],
    datasets: [
      {
        label: "Body Temperature",
        data: bodyTemperature[player.number],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const simulateBodyTemperature = () => {
    // Generate a random temperature value (you can adjust the range)
    const randomTemperature = Math.random() * 10 + 35;
    const newLabel = labels[player.number].length + 1;
    labels[player.number] = [...labels[player.number], newLabel];
    setLabels(labels);
    bodyTemperature[player.number] = [
      ...bodyTemperature[player.number],
      Math.round(randomTemperature),
    ];
    setBodyTemperature(bodyTemperature);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateBodyTemperature, 1000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, data, bodyTemperature, labels, player]);

  return (
    <>
      {player.number === selectedPlayer && (
        <div className="bg-white rounded-xl p-10 flex flex-col gap-7 h-full w-full">
          <h2 className="text-3xl font-bold">Body Temperature</h2>
          <Line options={options} data={data} />
        </div>
      )}
    </>
  );
};

export default PlayerBodyTemperature;
