import HeartRateChart from "../HeartRate/HeartRate";
import RunningDistanceSimulator from "../RunningDistance/RunningDistance";
import RunningSpeed from "../RunningSpeed/RunningSpeed";
import PlayerBodyTemperature from "../PlayerBodyTemperature/PlayerBodyTemperature";
import PlayerStatsProps from "./PlayerStats.types";

const PlayersStats: React.FC<PlayerStatsProps> = ({
  player,
  selectedPlayer,
  isTimerRunning,
}) => {
  return (
    <>
      <HeartRateChart
        isTimerRunning={isTimerRunning}
        player={player}
        selectedPlayer={selectedPlayer}
      />
      <div className={selectedPlayer === player.number ? 'flex flex-col gap-5' : 'hidden'}>
        <RunningDistanceSimulator
          isTimerRunning={isTimerRunning}
          player={player}
          selectedPlayer={selectedPlayer}
        />
        <RunningSpeed
          isTimerRunning={isTimerRunning}
          player={player}
          selectedPlayer={selectedPlayer}
        />
      </div>
      <div className={selectedPlayer === player.number ? 'flex-grow' : 'hidden'}>
        <PlayerBodyTemperature
          isTimerRunning={isTimerRunning}
          player={player}
          selectedPlayer={selectedPlayer}
        />
      </div>
    </>
  );
};

export default PlayersStats;
