import React, { ChangeEvent, useState } from "react";
import appleLogo from "../assets/svg/apple-logo.svg";
import googleLogo from "../assets/svg/google_logo.svg";
import { signInWithEmailAndPassword } from "../authHelpers";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithEmailAndPassword = async () => {
    const hasError = await signInWithEmailAndPassword(email, password);
    if (!hasError) {
      navigate("/dashboard/play");
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
            <h3 className=" text-3xl font-semibold text-center">
              Sign in to your account
            </h3>
          </div>
          <div className="flex gap-3">
            <button className="bg-neutral-100 text-neutral-800 px-3 py-4 rounded-xl w-full flex gap-3 items-center">
              <img className="h-5" src={googleLogo} alt="google-logo" />
              Sign in with Google
            </button>
            <button className="bg-neutral-100 text-neutral-800 px-3 py-4 rounded-xl w-full flex gap-3 items-center">
              <img className="h-5" src={appleLogo} alt="apple-logo" />
              Sign in with Apple
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <hr className="grow" />
            <span>Or use Email</span>
            <hr className="grow" />
          </div>
          <div className="flex flex-col gap-3">
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSignInWithEmailAndPassword();
                  }
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 rounded-lg text-blue-600 border border-neutral-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-normal text-neutral-500"
              >
                Remember on this device
              </label>
            </div>
            <a className="text-neutral-800 underline text-sm" href="/">
              Forgot password?
            </a>
          </div>
          <button
            className="w-full bg-neutral-800 text-white font-medium px-3 py-4 rounded-xl hover:bg-neutral-900"
            onClick={handleSignInWithEmailAndPassword}
          >
            Sign In
          </button>
          <p className="text-neutral-500 text-center">
            Not a member?{" "}
            <a className="text-neutral-800 underline" href="/signin">
              Start a 14-day free trial!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
