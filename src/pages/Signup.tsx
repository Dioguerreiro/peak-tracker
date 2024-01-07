import React, { useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../authHelpers";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const arePasswordsEqual = (): boolean => {
    if (password !== passwordConfirmation) {
      setHasPasswordError(true);
      return true;
    }
    return false;
  };

  const handleSignInWithEmailAndPassword = async () => {
    if (!arePasswordsEqual()) {
      const hasError = await registerWithEmailAndPassword(name, email, password);
      if (!hasError) {
        navigate("/dashboard/play");
      }
    }
  };

  return (
    <section
      id="login-container"
      className="flex justify-center items-center h-[100vh]"
    >
      <div className="flex justify-center items-center w-[556px] bg-white rounded-3xl p-10">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col">
            <h3 className=" text-3xl font-semibold text-center">Sign up</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                id="text"
                className="border border-neutral-300 text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                className="border border-neutral-300 text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="pasword"
                className="border border-neutral-300 text-gray-900S rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="confirm-pasword"
                className="border border-neutral-300 text-gray-900S rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
                placeholder="Confirm password"
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSignInWithEmailAndPassword();
                  }
                }}
              />
              {hasPasswordError && (
                <span className="text-red-500">Passwords do not match</span>
              )}
            </div>
          </div>
          <button
            className="w-full bg-neutral-800 text-white font-medium px-3 py-4 rounded-xl hover:bg-neutral-900"
            onClick={handleSignInWithEmailAndPassword}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
