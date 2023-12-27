interface HeartRateChartProps {
  currentHeartRate: number;
  setCurrentHearRate: (newHeartRate:number) => void;
  currentHeartRateZone: string;
  setCurrentHeartRateZone: (color: string) => void;
  currentHeartRateData: number[];
  setcurrentHeartRateData: (updateFunction: (prevData: number[]) => number[]) => void;
  currentAvgHeartRate: number;
  setCurrentAvgHeartRate: (newAvgHeartRate: number) => void;
  zoneTimers: number[];
  setZoneTimers: (updateFunction: (prevTimers: number[]) => number[]) => void;
  restingHeartRate: number;
  maxHeartRate: number;
  isTimerRunning: boolean;
}

export default HeartRateChartProps;
