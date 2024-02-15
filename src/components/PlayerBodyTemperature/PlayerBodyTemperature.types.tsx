import { TPlayer } from "../PlayersTab/PlayersTab.types";

interface PlayerBodyTemperatureProps {
    isTimerRunning: boolean;
    player: TPlayer;
    selectedPlayer: number | null;
}

export default PlayerBodyTemperatureProps;