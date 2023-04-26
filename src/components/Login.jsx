import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";



const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  console.log(location?.state?.from?.pathname);
  // if user coming here form a private route then after we will redirect hmm
  const whatWillBeGo = location?.state?.from?.pathname || "/";

  const handleLogin = () => {
    logIn();
    navigate(whatWillBeGo)
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
          </div>

          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mt-4 flex gap-x-2">
          <p
            onClick={handleLogin}
            className="cursor-pointer text-primary font-semibold underline"
          >
            Login With Google
          </p>
          <Link
          to="/registration"
            className="cursor-pointer text-primary font-semibold underline"
          >
            Registration new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
