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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PlayerBodyTemperature: React.FC<PlayerBodyTemperatureProps> = ({ isTimerRunning }) => {
  const [temperatureData, setTemperatureData] = useState([27]);
  const [labels, setLabels] = useState<number[]>([0]);

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
    labels,
    datasets: [
      {
        label: "Body Temperature",
        data: temperatureData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const simulateBodyTemperature = () => {
    // Generate a random temperature value (you can adjust the range)
    const randomTemperature = Math.random() * 10 + 35;
    const newLabel = labels.length + 1;
    console.log(Math.round(randomTemperature));
    console.log(JSON.stringify(data));
    setLabels((prevLabels) => [...prevLabels, newLabel]);
    setTemperatureData((prevData) => [
      ...prevData,
      Math.round(randomTemperature),
    ]);
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateBodyTemperature, 1000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, data, temperatureData, labels]);

  return (
    <div className="bg-white rounded-xl p-10 flex flex-col gap-7 h-full w-full">
      <h2 className="text-3xl font-bold">Body Temperature</h2>
      <Line options={options} data={data} />
    </div>
  );
};

export default PlayerBodyTemperature;
