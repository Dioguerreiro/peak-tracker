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

  const [distance, setDistance] = useState(
    Object.fromEntries(players.map((player) => [player.number, 0]))
  );

  const [speed, setSpeed] = useState(
    Object.fromEntries(players.map((player) => [player.number, 0]))
  );
  const [maxSpeed, setMaxSpeed] = useState(
    Object.fromEntries(players.map((player) => [player.number, 0]))
  );

  const [bodyTemperature, setBodyTemperature] = useState(
    Object.fromEntries(players.map((player) => [player.number, [27]]))
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

    setDistance(
      Object.fromEntries(players.map((player) => [player.number, 0]))
    );
    setSpeed(
      Object.fromEntries(players.map((player) => [player.number, 0]))
    );
    setMaxSpeed(
      Object.fromEntries(players.map((player) => [player.number, 0]))
    );
    setBodyTemperature(
      Object.fromEntries(players.map((player) => [player.number, [27]]))
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
      distance,
      setDistance,
      speed,
      setSpeed,
      maxSpeed,
      setMaxSpeed,
      bodyTemperature,
      setBodyTemperature,
      handleStop,
    }),
    [
      currentHeartRate,
      currentHeartRateZone,
      currentHeartRateData,
      currentAvgHeartRate,
      zoneTimers,
      distance,
      speed,
      maxSpeed,
      bodyTemperature,
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
