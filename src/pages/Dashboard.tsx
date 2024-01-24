import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardPlay from "./DashboardHome";
import useAuthRedirect from "../misc/useAuthRedirect";

const Dashboard = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <>
    <h1>List</h1>
    </>
  );
};

export default Dashboard;
