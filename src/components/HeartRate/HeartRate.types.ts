import { TPlayer } from "../PlayersTab/PlayersTab.types";

interface HeartRateChartProps {
  isTimerRunning: boolean;
  player: TPlayer;
  selectedPlayer: number | null;
}

export default HeartRateChartProps;
