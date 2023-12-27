import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import HeartRateChart from "../components/HeartRate/HeartRate";
import Timer from "../components/Timer/Timer";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

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
  );
};

export default Dashboard;
