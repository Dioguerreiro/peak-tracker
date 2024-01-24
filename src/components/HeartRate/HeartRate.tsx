import React, { useEffect, useState } from "react";
import HeartRateChartProps from "./HeartRate.types";

const HeartRateChart: React.FC<HeartRateChartProps> = ({
  isTimerRunning,
  player,
  selectedPlayer,
}) => {
  const maxHeartRate = 200;
  const restingHeartRate = 70;
  // Heart rate controllers
  const [currentHeartRate, setCurrentHeartRate] = useState<number>(0);
  const [currentHeartRateZone, setCurrentHeartRateZone] = useState<string>("");
  const [currentHeartRateData, setcurrentHeartRateData] = useState<number[]>(
    []
  );
  const [currentAvgHeartRate, setCurrentAvgHeartRate] = useState<number>(0);
  const [zoneTimers, setZoneTimers] = useState([0, 0, 0, 0, 0]);

  const handleStop = () => {
    setCurrentHeartRate(0);
    setCurrentHeartRateZone("");
    setcurrentHeartRateData([]);
    setCurrentAvgHeartRate(0);
    setZoneTimers([0, 0, 0, 0, 0]);
  };

  const setZoneColor = (newHeartRate: number) => {
    if (newHeartRate < 135) {
      setCurrentHeartRateZone("blue"); // Zone 1
      setZoneTimers((prevTimers: number[]) => {
        const updatedTimers: number[] = [...prevTimers];
        updatedTimers[0] += 1;
        return updatedTimers;
      });
    } else if (newHeartRate >= 136 && newHeartRate <= 149) {
      setCurrentHeartRateZone("teal"); // Zone 2
      setZoneTimers((prevTimers: number[]) => {
        const updatedTimers: number[] = [...prevTimers];
        updatedTimers[1] += 1;
        return updatedTimers;
      });
    } else if (newHeartRate >= 150 && newHeartRate <= 163) {
      setCurrentHeartRateZone("green"); // Zone 3
      setZoneTimers((prevTimers: number[]) => {
        const updatedTimers: number[] = [...prevTimers];
        updatedTimers[2] += 1;
        return updatedTimers;
      });
    } else if (newHeartRate >= 164 && newHeartRate <= 176) {
      setCurrentHeartRateZone("orange"); // Zone 4
      setZoneTimers((prevTimers: number[]) => {
        const updatedTimers: number[] = [...prevTimers];
        updatedTimers[3] += 1;
        return updatedTimers;
      });
    } else {
      setCurrentHeartRateZone("red"); // Zone 5
      setZoneTimers((prevTimers: number[]) => {
        const updatedTimers: number[] = [...prevTimers];
        updatedTimers[4] += 1;
        return updatedTimers;
      });
    }
  };

  const simulateHeartRate = () => {
    try {
      const randomValue = Math.random();
      const variationRange = 0.2;
      const variation = (maxHeartRate - restingHeartRate) * variationRange;
      const newHeartRate = Math.round(
        Math.min(
          Math.max(
            currentHeartRate + randomValue * variation - variation / 2,
            restingHeartRate
          ),
          maxHeartRate
        )
      );

      // Update the heart rate and set the zone color
      setZoneColor(newHeartRate);
      setCurrentHeartRate(newHeartRate);

      // Update heartRateData using the setHeartRateData function
      setcurrentHeartRateData((prevData: number[]) => [
        ...prevData,
        Math.round(newHeartRate),
      ]);
      calculateHeartRateAvg();
    } catch (error) {
      console.error("Error in simulateHeartRate:", error);
    }
  };

  const calculateHeartRateAvg = () => {
    if (currentHeartRateData.length <= 0) {
      setCurrentAvgHeartRate(currentHeartRate);
    } else {
      const sum = currentHeartRateData.reduce((acc, num) => acc + num, 0);
      setCurrentAvgHeartRate(Math.round(sum / currentHeartRateData.length));
    }
  };

  const formatTime = (seconds: number): string => {
    const formattedMinutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const formattedSeconds = (seconds % 60).toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateHeartRate, 1000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [
    isTimerRunning,
    currentHeartRate,
    restingHeartRate,
    maxHeartRate,
    currentHeartRateData,
  ]);

  return (
    <>
      {player.number === selectedPlayer && (
        <div className="bg-white rounded-xl p-10 flex flex-col gap-7">
          <h1 className="text-3xl font-bold">{`HeartRate --> ${player.name}`}</h1>
          <div className="flex flex-col gap-2">
            <div className="flex rounded overflow-hidden">
              <div
                className={`${
                  currentHeartRateZone === "blue"
                    ? "bg-spc_blue-50"
                    : "bg-spc_blue-100"
                } py-1 px-2`}
              >
                <div
                  className={`flex gap-1 items-center ${
                    currentHeartRateZone !== "blue" ? "invisible" : ""
                  }`}
                >
                  <span className="uppercase text-base font-semibold">
                    zone 1
                  </span>
                </div>
              </div>
              <div
                className={`${
                  currentHeartRateZone === "teal"
                    ? "bg-spc_teal-50"
                    : "bg-spc_teal-100"
                } py-1 px-2`}
              >
                <div
                  className={`flex gap-1 items-center ${
                    currentHeartRateZone !== "teal" ? "invisible" : ""
                  }`}
                >
                  <span className="uppercase text-base font-semibold">
                    zone 2
                  </span>
                </div>
              </div>
              <div
                className={`${
                  currentHeartRateZone === "green"
                    ? "bg-spc_green-50"
                    : "bg-spc_green-100"
                } py-1 px-2`}
              >
                <div
                  className={`flex gap-1 items-center ${
                    currentHeartRateZone !== "green" ? "invisible" : ""
                  }`}
                >
                  <span className="uppercase text-base font-semibold">
                    zone 3
                  </span>
                </div>
              </div>
              <div
                className={`${
                  currentHeartRateZone === "orange"
                    ? "bg-spc_orange-50"
                    : "bg-spc_orange-100"
                } py-1 px-2`}
              >
                <div
                  className={`flex gap-1 items-center ${
                    currentHeartRateZone !== "orange" ? "invisible" : ""
                  }`}
                >
                  <span className="uppercase text-base font-semibold">
                    zone 4
                  </span>
                </div>
              </div>
              <div
                className={`${
                  currentHeartRateZone === "red"
                    ? "bg-spc_red-50"
                    : "bg-spc_red-100"
                } py-1 px-2`}
              >
                <div
                  className={`flex gap-1 items-center ${
                    currentHeartRateZone !== "red" ? "invisible" : ""
                  }`}
                >
                  <span className="uppercase text-base font-semibold">
                    zone 5
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-neutral-500 text-base font-semibold">
                Current heart rate
              </h2>
              <h2 className="text-base font-semibold">
                {currentHeartRate === 0 ? "-" : currentHeartRate}
              </h2>
            </div>
            <div className="flex justify-between pt-2 border-t border-t-neutral-200">
              <h2 className="text-neutral-500 text-base font-semibold">
                Average heart rate
              </h2>
              <h2 className="text-base font-semibold">
                {currentAvgHeartRate === 0 ? "-" : currentAvgHeartRate}
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-spc_blue-50">Zone 1</span>
                <div className="w-[9px] h-[9px] bg-spc_blue-50 rounded-full"></div>
                <span>{formatTime(zoneTimers[0])}</span>
              </div>
              <span>&#60;135BPM</span>
            </div>
            <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-spc_teal-50">Zone 2</span>
                <div className="w-[9px] h-[9px] bg-spc_teal-50 rounded-full"></div>
                <span>{formatTime(zoneTimers[1])}</span>
              </div>
              <span>136-149BPM</span>
            </div>
            <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-spc_green-50">Zone 3</span>
                <div className="w-[9px] h-[9px] bg-spc_green-50 rounded-full"></div>
                <span>{formatTime(zoneTimers[2])}</span>
              </div>
              <span>150-163BPM</span>
            </div>
            <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-spc_orange-50">Zone 4</span>
                <div className="w-[9px] h-[9px] bg-spc_orange-50 rounded-full"></div>
                <span>{formatTime(zoneTimers[3])}</span>
              </div>
              <span>164-176BPM</span>
            </div>
            <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-spc_red-50">Zone 5</span>
                <div className="w-[9px] h-[9px] bg-spc_red-50 rounded-full"></div>
                <span>{formatTime(zoneTimers[4])}</span>
              </div>
              <span>177+BPM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeartRateChart;
