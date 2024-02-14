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
      {player.number === selectedPlayer && (
        <>
          <HeartRateChart
            isTimerRunning={isTimerRunning}
            player={player}
          />
          <div className="flex flex-col gap-5">
            <RunningDistanceSimulator isTimerRunning={isTimerRunning} player={player}/>
            <RunningSpeed isTimerRunning={isTimerRunning} player={player}/>
          </div>
          <div className="flex-grow">
            <PlayerBodyTemperature isTimerRunning={isTimerRunning} player={player}/>
          </div>
        </>
      )}
    </>
  );
};

export default PlayersStats;
