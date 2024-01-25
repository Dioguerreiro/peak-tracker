import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import playersData from "../assets/json/players.json";
import { TPlayer } from "../components/PlayersTab/PlayersTab.types";
import { IPlayerStatsContext } from "./PlayerStatsContext.types";

export const PlayerStatsContext = createContext<IPlayerStatsContext>(
  {} as IPlayerStatsContext
);

export const PlayerStatsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [players] = useState(playersData.soccerTeamPlayers as TPlayer[]);

  // New Solution
  const [currentHeartRate, setCurrentHeartRate] = useState(
    Object.fromEntries(players.map((player) => [player.number, 0]))
  );
  const [currentHeartRateZone, setCurrentHeartRateZone] = useState(
    Object.fromEntries(players.map((player) => [player.number, ""]))
  );
  const [currentHeartRateData, setCurrentHeartRateData] = useState(
    Object.fromEntries(players.map((player) => [player.number, [] as number[]]))
  );
  const [currentAvgHeartRate, setCurrentAvgHeartRate] = useState(
    Object.fromEntries(players.map((player) => [player.number, 0]))
  );
  const [zoneTimers, setZoneTimers] = useState(
    Object.fromEntries(
      players.map((player) => [player.number, [0, 0, 0, 0, 0]])
    )
  );

  const handleStop = () => {
    setCurrentHeartRate(
      Object.fromEntries(players.map((player) => [player.number, 0]))
    );
    setCurrentHeartRateZone(
      Object.fromEntries(players.map((player) => [player.number, ""]))
    );
    setCurrentHeartRateData(
      Object.fromEntries(
        players.map((player) => [player.number, [] as number[]])
      )
    );
    setCurrentAvgHeartRate(
      Object.fromEntries(players.map((player) => [player.number, 0]))
    );
    setZoneTimers(
      Object.fromEntries(
        players.map((player) => [player.number, [0, 0, 0, 0, 0]])
      )
    );
  };

  const PlayerStatsMemo = useMemo(
    () => ({
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
      handleStop,
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
      <PlayerStatsContext.Provider value={PlayerStatsMemo}>
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
