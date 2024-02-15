import React, { useEffect, useState } from "react";
import HeartRateChartProps from "./HeartRate.types";
import { usePlayerStatsContext } from "../../context/PlayerStatsContext.context";

const HeartRateChart: React.FC<HeartRateChartProps> = ({
  isTimerRunning,
  player,
}) => {
  const maxHeartRate = 200;
  const restingHeartRate = 70;

  // Heart rate controllers
  const {
    currentHeartRate,
      setCurrentHeartRate,
      currentHeartRateZone,
      setCurrentHeartRateZone,
      currentHeartRateData,
      setCurrentHeartRateData,
      currentAvgHeartRate,
      setCurrentAvgHeartRate,
      zoneTimers,
      setZoneTimers,
  } = usePlayerStatsContext();

  const setZoneColor = (newHeartRate: number) => {
    if (newHeartRate < 135) {
      currentHeartRateZone[player.number] = "blue";
      setCurrentHeartRateZone(currentHeartRateZone); // Zone 1
      zoneTimers[player.number][0] += 1;
      setZoneTimers(zoneTimers);
    } else if (newHeartRate >= 136 && newHeartRate <= 149) {
      currentHeartRateZone[player.number] = "teal";
      setCurrentHeartRateZone(currentHeartRateZone); // Zone 2
      zoneTimers[player.number][1] += 1;
      setZoneTimers(zoneTimers);
    } else if (newHeartRate >= 150 && newHeartRate <= 163) {
      currentHeartRateZone[player.number] = "green";
      setCurrentHeartRateZone(currentHeartRateZone); // Zone 3
      zoneTimers[player.number][2] += 1;
      setZoneTimers(zoneTimers);
    } else if (newHeartRate >= 164 && newHeartRate <= 176) {
      currentHeartRateZone[player.number] = "orange";
      setCurrentHeartRateZone(currentHeartRateZone); // Zone 4
      zoneTimers[player.number][3] += 1;
      setZoneTimers(zoneTimers);
    } else {
      currentHeartRateZone[player.number] = "red";
      setCurrentHeartRateZone(currentHeartRateZone); // Zone 5
      zoneTimers[player.number][4] += 1;
      setZoneTimers(zoneTimers);
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
            currentHeartRate[player.number] + randomValue * variation - variation / 2,
            restingHeartRate
          ),
          maxHeartRate
        )
      );

      // Update the heart rate and set the zone color
      setZoneColor(newHeartRate);
      
      currentHeartRate[player.number] = newHeartRate;
      setCurrentHeartRate(currentHeartRate);

      // Update heartRateData using the setHeartRateData function
      currentHeartRateData[player.number] = [...currentHeartRateData[player.number], Math.round(newHeartRate)];
      setCurrentHeartRateData(currentHeartRateData);
      calculateHeartRateAvg();
    } catch (error) {
      console.error("Error in simulateHeartRate:", error);
    }
  };

  const calculateHeartRateAvg = () => {
    if (currentHeartRateData[player.number].length <= 0) {
      setCurrentAvgHeartRate(currentHeartRate);
    } else {
      const sum = currentHeartRateData[player.number].reduce((acc, num) => acc + num, 0);
      currentAvgHeartRate[player.number] = Math.round(sum / currentHeartRateData[player.number].length);
      setCurrentAvgHeartRate(currentAvgHeartRate);
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
    player,
  ]);

  return (
    <div className="bg-white rounded-xl p-10 flex flex-col gap-7">
      <h1 className="text-3xl font-bold">Heart Rate</h1>
      <div className="flex flex-col gap-2">
        <div className="flex rounded overflow-hidden w-fit">
          <div
            className={`${
              currentHeartRateZone[player.number] === "blue"
                ? "bg-spc_blue-50"
                : "bg-spc_blue-100"
            } py-1 px-2`}
          >
            <div
              className={`flex gap-1 items-center ${
                currentHeartRateZone[player.number] !== "blue" ? "invisible" : ""
              }`}
            >
              <span className="uppercase text-base font-semibold">zone 1</span>
            </div>
          </div>
          <div
            className={`${
              currentHeartRateZone[player.number] === "teal"
                ? "bg-spc_teal-50"
                : "bg-spc_teal-100"
            } py-1 px-2`}
          >
            <div
              className={`flex gap-1 items-center ${
                currentHeartRateZone[player.number] !== "teal" ? "invisible" : ""
              }`}
            >
              <span className="uppercase text-base font-semibold">zone 2</span>
            </div>
          </div>
          <div
            className={`${
              currentHeartRateZone[player.number] === "green"
                ? "bg-spc_green-50"
                : "bg-spc_green-100"
            } py-1 px-2`}
          >
            <div
              className={`flex gap-1 items-center ${
                currentHeartRateZone[player.number] !== "green" ? "invisible" : ""
              }`}
            >
              <span className="uppercase text-base font-semibold">zone 3</span>
            </div>
          </div>
          <div
            className={`${
              currentHeartRateZone[player.number] === "orange"
                ? "bg-spc_orange-50"
                : "bg-spc_orange-100"
            } py-1 px-2`}
          >
            <div
              className={`flex gap-1 items-center ${
                currentHeartRateZone[player.number] !== "orange" ? "invisible" : ""
              }`}
            >
              <span className="uppercase text-base font-semibold">zone 4</span>
            </div>
          </div>
          <div
            className={`${
              currentHeartRateZone[player.number] === "red"
                ? "bg-spc_red-50"
                : "bg-spc_red-100"
            } py-1 px-2`}
          >
            <div
              className={`flex gap-1 items-center ${
                currentHeartRateZone[player.number] !== "red" ? "invisible" : ""
              }`}
            >
              <span className="uppercase text-base font-semibold">zone 5</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="text-neutral-500 text-base font-semibold">
            Current heart rate
          </h2>
          <h2 className="text-base font-semibold">
            {currentHeartRate[player.number] === 0 ? "-" : currentHeartRate[player.number]}
          </h2>
        </div>
        <div className="flex justify-between pt-2 border-t border-t-neutral-200">
          <h2 className="text-neutral-500 text-base font-semibold">
            Average heart rate
          </h2>
          <h2 className="text-base font-semibold">
            {currentAvgHeartRate[player.number] === 0 ? "-" : currentAvgHeartRate[player.number]}
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_blue-50">Zone 1</span>
            <div className="w-[9px] h-[9px] bg-spc_blue-50 rounded-full"></div>
            <span>{formatTime(zoneTimers[player.number][0])}</span>
          </div>
          <span>&#60;135BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_teal-50">Zone 2</span>
            <div className="w-[9px] h-[9px] bg-spc_teal-50 rounded-full"></div>
            <span>{formatTime(zoneTimers[player.number][1])}</span>
          </div>
          <span>136-149BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_green-50">Zone 3</span>
            <div className="w-[9px] h-[9px] bg-spc_green-50 rounded-full"></div>
            <span>{formatTime(zoneTimers[player.number][2])}</span>
          </div>
          <span>150-163BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_orange-50">Zone 4</span>
            <div className="w-[9px] h-[9px] bg-spc_orange-50 rounded-full"></div>
            <span>{formatTime(zoneTimers[player.number][3])}</span>
          </div>
          <span>164-176BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_red-50">Zone 5</span>
            <div className="w-[9px] h-[9px] bg-spc_red-50 rounded-full"></div>
            <span>{formatTime(zoneTimers[player.number][4])}</span>
          </div>
          <span>177+BPM</span>
        </div>
      </div>
    </div>
  );
};

export default HeartRateChart;
