import { TPlayer } from "../PlayersTab/PlayersTab.types";

interface PlayerRunningSpeedProps {
    isTimerRunning: boolean;
    player: TPlayer;
    selectedPlayer: number | null;
}

export default PlayerRunningSpeedProps;