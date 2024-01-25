import { useState } from "react";
import Timer from "../components/Timer/Timer";
import PlayersTab from "../components/PlayersTab/PlayersTab";
import playersData from "../assets/json/players.json";
import { TPlayer } from "../components/PlayersTab/PlayersTab.types";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { usePlayerStatsContext } from "../context/PlayerStatsContext.context";

const DashboardPlay = () => {
  const { user, loading } = useAuthRedirect();

  // Timer controllers
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const {
    handleStopHeartRate
  } = usePlayerStatsContext();

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  const handlePause = () => {
    setIsTimerRunning(false);
  };

  const handleStop = () => {
    setIsTimerRunning(false);
    setTimer(0);
    handleStopHeartRate();
  };

  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  return (
    <DashboardLayout>
      <section className="flex flex-col gap-5 p-5">
        <section className="flex flex-col gap-5">
          <div className="flex justify-between">
            <Timer
              isTimerRunning={isTimerRunning}
              setIsTimerRunning={setIsTimerRunning}
              timer={timer}
              setTimer={setTimer}
              handleStart={handleStart}
              handlePause={handlePause}
              handleStop={handleStop}
            />
            <div className="flex gap-5">
              <PrimaryButton onClick={() => setSelectedPlayer(null)}>
                SQUAD
              </PrimaryButton>
              <Link
                className=" border border-neutral-800 uppercase text-neutral-800 font-medium px-8 py-4 rounded-xl hover:bg-neutral-900 w-fit"
                to="/"
              >
                Bench
              </Link>
            </div>
          </div>
          <PlayersTab
            players={playersData.soccerTeamPlayers as TPlayer[]}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            isTimerRunning={isTimerRunning}
          />
        </section>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPlay;
