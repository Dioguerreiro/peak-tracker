import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const useAuthRedirect = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // If still loading, do nothing
    if (!user) navigate("/"); // If user is not logged in, redirect to "/"
  }, [user, loading, navigate]);

  return { user, loading };
};

export default useAuthRedirect;
