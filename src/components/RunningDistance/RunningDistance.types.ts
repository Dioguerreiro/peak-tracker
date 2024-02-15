import { TPlayer } from "../PlayersTab/PlayersTab.types";

interface PlayerRunningDistanceProps {
  isTimerRunning: boolean;
  player: TPlayer;
  selectedPlayer: number | null;
}

export default PlayerRunningDistanceProps;
