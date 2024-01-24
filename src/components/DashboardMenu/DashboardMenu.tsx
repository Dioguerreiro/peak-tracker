import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo/logo.png";
import { signOut } from "../../services/authHelpers";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faGrid2,
  faUsers,
  faPlay,
  faCalendar,
  faComments,
  faGear,
  faRightFromBracket,
} from "@fortawesome/pro-solid-svg-icons";

const DashboardMenu = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <nav className="bg-neutral-800 p-5 flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" className="h-11" />
      </div>
      <div className="flex gap-14 justify-center items-center">
        <NavLink
          to="/dashboard/play"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faGrid2} className="text-4xl"/>
        </NavLink>
        <NavLink
          to="/dashboard/team"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faUsers} className="text-4xl"/>
        </NavLink>
        <NavLink
          to="/dashboard/videos"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faPlay} className="text-4xl"/>
        </NavLink>
        <NavLink
          to="/dashboard/calendar"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faCalendar} className="text-4xl"/>
        </NavLink>
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faComments} className="text-4xl"/>
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-400"
          }
        >
          <FontAwesomeIcon icon={faGear} className="text-4xl"/>
        </NavLink>
      </div>
      <div>
        <button onClick={handleSignOut}><FontAwesomeIcon icon={faRightFromBracket} className="text-4xl text-white"/></button>
      </div>
    </nav>
  );
};

export default DashboardMenu;
