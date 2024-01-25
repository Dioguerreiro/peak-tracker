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
          />
          <div className="flex flex-col gap-5">
            <RunningDistanceSimulator isTimerRunning={isTimerRunning}/>
            <RunningSpeed isTimerRunning={isTimerRunning}/>
          </div>
          <div className="flex-grow">
            <PlayerBodyTemperature isTimerRunning={isTimerRunning}/>
          </div>
        </>
      )}
    </>
  );
};

export default PlayersStats;
