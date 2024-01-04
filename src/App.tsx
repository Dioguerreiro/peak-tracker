import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardPlay from './pages/DashboardPlay';
import DashboardTeam from './pages/DashboardTeam';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard">
          <Route path='/dashboard/play' element={<DashboardPlay/>}/>
          <Route path='/dashboard/team' element={<DashboardTeam/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
