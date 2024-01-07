import { useState } from "react";
import HeartRateChart from "../components/HeartRate/HeartRate";
import Timer from "../components/Timer/Timer";
import PlayersTab from "../components/PlayersTab/PlayersTab";
import playersData from "../assets/json/players.json";
import { TPlayer } from "../components/PlayersTab/PlayersTab.types";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardPlay = () => {

  const { user, loading } = useAuthRedirect();

  // Timer controllers
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  const handlePause = () => {
    setIsTimerRunning(false);
  };

  const handleStop = () => {
    setIsTimerRunning(false);
    setTimer(0);
    setCurrentHearRate(0);
    setCurrentHeartRateZone("");
    setcurrentHeartRateData([]);
    setCurrentAvgHeartRate(0);
    setZoneTimers([0, 0, 0, 0, 0]);
  };

  // Heart rate controllers
  const [currentHeartRate, setCurrentHearRate] = useState<number>(0);
  const [currentHeartRateZone, setCurrentHeartRateZone] = useState<string>("");
  const [currentHeartRateData, setcurrentHeartRateData] = useState<number[]>(
    []
  );
  const [currentAvgHeartRate, setCurrentAvgHeartRate] = useState<number>(0);
  const [zoneTimers, setZoneTimers] = useState([0, 0, 0, 0, 0]);

  return (
    <DashboardLayout>
      <section className="flex flex-col gap-5 p-5">
        <section>
          <PlayersTab players={playersData.soccerTeamPlayers as TPlayer[]} />
        </section>
        <section
          id="dashboard-section"
          className="flex justify-center items-center"
        >
          <Timer
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            timer={timer}
            setTimer={setTimer}
            handleStart={handleStart}
            handlePause={handlePause}
            handleStop={handleStop}
          />
          <HeartRateChart
            restingHeartRate={70}
            maxHeartRate={200}
            isTimerRunning={isTimerRunning}
            currentHeartRate={currentHeartRate}
            setCurrentHearRate={setCurrentHearRate}
            currentHeartRateZone={currentHeartRateZone}
            setCurrentHeartRateZone={setCurrentHeartRateZone}
            currentHeartRateData={currentHeartRateData}
            setcurrentHeartRateData={setcurrentHeartRateData}
            currentAvgHeartRate={currentAvgHeartRate}
            setCurrentAvgHeartRate={setCurrentAvgHeartRate}
            zoneTimers={zoneTimers}
            setZoneTimers={setZoneTimers}
          />
        </section>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPlay;
