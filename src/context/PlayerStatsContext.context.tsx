import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { IPlayerStatsContext } from "./PlayerStatsContext.types";

export const PlayerStatsContext = createContext<IPlayerStatsContext>(
  {} as IPlayerStatsContext
);

export const PlayerStatsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentHeartRate, setCurrentHeartRate] = useState<number>(0);
  const [currentHeartRateZone, setCurrentHeartRateZone] = useState<string>("");
  const [currentHeartRateData, setcurrentHeartRateData] = useState<number[]>(
    []
  );
  const [currentAvgHeartRate, setCurrentAvgHeartRate] = useState<number>(0);
  const [zoneTimers, setZoneTimers] = useState([0, 0, 0, 0, 0]);

  const handleStopHeartRate = () => {
    setCurrentHeartRate(0);
    setCurrentHeartRateZone("");
    setcurrentHeartRateData([]);
    setCurrentAvgHeartRate(0);
    setZoneTimers([0, 0, 0, 0, 0]);
  };

  const playerStatsMemo = useMemo(
    () => ({
      currentHeartRate,
      setCurrentHeartRate,
      currentHeartRateZone,
      setCurrentHeartRateZone,
      currentHeartRateData,
      setcurrentHeartRateData,
      currentAvgHeartRate,
      setCurrentAvgHeartRate,
      zoneTimers,
      setZoneTimers,
      handleStopHeartRate,
    }),
    [
      currentHeartRate,
      currentHeartRateZone,
      currentHeartRateData,
      currentAvgHeartRate,
      zoneTimers,
    ]
  );

  return (
    <>
      <PlayerStatsContext.Provider value={playerStatsMemo}>
        {children}
      </PlayerStatsContext.Provider>
    </>
  );
};

export const usePlayerStatsContext = () => {
  return useContext(PlayerStatsContext);
};

export default {
  Provider: PlayerStatsContextProvider,
  usePlayerStatsContext,
};
