export interface IPlayerStatsContext {
  currentHeartRate: {
    [x: number]: number;
  };
  setCurrentHeartRate: React.Dispatch<
    React.SetStateAction<{
      [x: number]: number;
    }>
  >;
  currentHeartRateZone: {
    [k: string]: string;
  };
  setCurrentHeartRateZone: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
  currentHeartRateData: {
    [k: string]: number[];
  };
  setCurrentHeartRateData: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number[];
    }>
  >;
  currentAvgHeartRate: {
    [k: string]: number;
  };
  setCurrentAvgHeartRate: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number;
    }>
  >;

  zoneTimers: {
    [k: string]: number[];
  };
  setZoneTimers: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number[];
    }>
  >;

  distance: {
    [k: string]: number;
  };
  setDistance: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number;
    }>
  >;

  speed: {
    [k: string]: number;
  };
  setSpeed: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number;
    }>
  >;
  maxSpeed: {
    [k: string]: number;
  };
  setMaxSpeed: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number;
    }>
  >;

  bodyTemperature: {
    [k: string]: number[];
  };
  setBodyTemperature: React.Dispatch<
    React.SetStateAction<{
      [k: string]: number[];
    }>
  >;

  handleStop: () => void;
}
