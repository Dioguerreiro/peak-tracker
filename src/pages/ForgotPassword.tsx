import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logoNew.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleResetPassword = () => {};

  return (
    <section
      id="login-container"
      className="flex justify-center items-center h-[100vh]"
    >
      <div className="flex justify-center items-center w-[556px] bg-white rounded-3xl p-10">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="h-16 rounded-xl" />
          </div>
          <div className="flex flex-col">
            <h3 className=" text-3xl font-semibold text-center">
              Reset your password
            </h3>
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
          </div>
          <button
            className="w-full bg-neutral-800 text-white font-medium px-3 py-4 rounded-xl hover:bg-neutral-900"
            onClick={handleResetPassword}
          >
            Reset password
          </button>
          <p className="text-neutral-500 text-center">
            <Link className="text-neutral-800 underline" to="/">
              Go back to login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
