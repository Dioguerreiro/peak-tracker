import HeartRateChartProps from "../HeartRate/HeartRate.types";

export type TPlayer = {
  number: number;
  name: string;
};

interface PlayersTabProps {
  players: TPlayer[];
  selectedPlayer: number | null;
  setSelectedPlayer: (player: number) => void;
  isTimerRunning: boolean;
}

export default PlayersTabProps;
