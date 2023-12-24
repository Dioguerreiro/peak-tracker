import React, { useEffect } from "react";
import HeartRateChartProps from "./HeartRate.types";

const HeartRateChart: React.FC<HeartRateChartProps> = ({
  currentHeartRate,
  setCurrentHearRate,
  currentHeartRateZone,
  setCurrentHeartRateZone,
  currentHeartRateData,
  setcurrentHeartRateData,
  currentAvgHeartRate,
  setCurrentAvgHeartRate,
  restingHeartRate,
  maxHeartRate,
  isTimerRunning,
}) => {
  const setZoneColor = (newHeartRate: number) => {
    if (newHeartRate < 135) {
      setCurrentHeartRateZone("blue"); // Zone 1
    } else if (newHeartRate >= 136 && newHeartRate <= 149) {
      setCurrentHeartRateZone("teal"); // Zone 2
    } else if (newHeartRate >= 150 && newHeartRate <= 163) {
      setCurrentHeartRateZone("green"); // Zone 3
    } else if (newHeartRate >= 164 && newHeartRate <= 176) {
      setCurrentHeartRateZone("orange"); // Zone 4
    } else {
      setCurrentHeartRateZone("red"); // Zone 5
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
      setCurrentHearRate(newHeartRate);

      // Update heartRateData using the setHeartRateData function
      setcurrentHeartRateData((prevData: number[]) => [...prevData, Math.round(newHeartRate)]);
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

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(simulateHeartRate, 2000); // Update every 2 seconds
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
    <div className="bg-white rounded-md p-10 flex flex-col gap-7">
      <h1 className="text-3xl font-bold">Heart Rate</h1>
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
              <span className="uppercase text-base font-semibold">zone 1</span>
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
              <span className="uppercase text-base font-semibold">zone 2</span>
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
              <span className="uppercase text-base font-semibold">zone 3</span>
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
              <span className="uppercase text-base font-semibold">zone 4</span>
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
              <span className="uppercase text-base font-semibold">zone 5</span>
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
            <span>02:05</span>
          </div>
          <span>&#60;135BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_teal-50">Zone 2</span>
            <div className="w-[9px] h-[9px] bg-spc_teal-50 rounded-full"></div>
            <span>01:23</span>
          </div>
          <span>136-149BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_green-50">Zone 3</span>
            <div className="w-[9px] h-[9px] bg-spc_green-50 rounded-full"></div>
            <span>04:54</span>
          </div>
          <span>150-163BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_orange-50">Zone 4</span>
            <div className="w-[9px] h-[9px] bg-spc_orange-50 rounded-full"></div>
            <span>07:36</span>
          </div>
          <span>164-176BPM</span>
        </div>
        <div className="py-[5px] flex border-b border-neutral-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-spc_red-50">Zone 5</span>
            <div className="w-[9px] h-[9px] bg-spc_red-50 rounded-full"></div>
            <span>02:29</span>
          </div>
          <span>177+BPM</span>
        </div>
      </div>
    </div>
  );
};

export default HeartRateChart;
