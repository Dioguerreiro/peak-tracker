import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashboardPlay from "./pages/DashboardHome";
import DashboardTeam from "./pages/DashboardTeam";
import Signin from "./pages/Signup";
import DashboardCalendar from "./pages/DashboardCalendar";
import DashboardStats from "./pages/DashboardStats";
import DashboardChat from "./pages/DashboardChat";
import DashboardSettings from "./pages/DashboardSettings/DashboardSettings";
import ForgotPassword from "./pages/ForgotPassword";
import CreateTeam from "./pages/CreateTeam/CreateTeam";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/resetpassword" element={<ForgotPassword />} />
        <Route path="/createteam" element={<CreateTeam />} />
        <Route path="dashboard">
          <Route path="/dashboard/play" element={<DashboardPlay />} />
          <Route path="/dashboard/team" element={<DashboardTeam />} />
          <Route path="/dashboard/stats" element={<DashboardStats />} />
          <Route path="/dashboard/calendar" element={<DashboardCalendar />} />
          <Route path="/dashboard/chat" element={<DashboardChat />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
