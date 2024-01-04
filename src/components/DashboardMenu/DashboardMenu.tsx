import React, { ReactNode, FC } from "react";
import logo from "../../assets/logo/logo.png";
import { signOut } from "../../authHelpers";
import { Link, useNavigate } from "react-router-dom";

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
        <Link to="/dashboard/play">Home</Link>
        <a href="/dashboard/team">Team</a>
        <a href="/">Videos</a>
        <a href="/">Calendar</a>
        <a href="/">Chat</a>
        <a href="/">Settings</a>
      </div>
      <div>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </nav>
  );
};

export default DashboardMenu;
