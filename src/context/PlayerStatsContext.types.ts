export interface IPlayerStatsContext {
  currentHeartRate: number;
  setCurrentHeartRate: React.Dispatch<React.SetStateAction<number>>;
  currentHeartRateZone: string;
  setCurrentHeartRateZone: React.Dispatch<React.SetStateAction<string>>;
  currentHeartRateData: number[];
  setcurrentHeartRateData: React.Dispatch<React.SetStateAction<number[]>>;
  currentAvgHeartRate: number;
  setCurrentAvgHeartRate: React.Dispatch<React.SetStateAction<number>>;
  zoneTimers: number[];
  setZoneTimers: React.Dispatch<React.SetStateAction<number[]>>;
  handleStopHeartRate: () => void;
}
