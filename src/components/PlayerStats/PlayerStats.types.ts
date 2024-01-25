import { TPlayer } from "../PlayersTab/PlayersTab.types";

interface PlayerStatsProps {
  isTimerRunning: boolean;
  player: TPlayer;
  selectedPlayer: number | null;
}

export default PlayerStatsProps;
