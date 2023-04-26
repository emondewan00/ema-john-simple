import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUserEmailAndPassword } = useContext(AuthContext);
  const navigate=useNavigate()
  const submitHandler = (event) => {
    event.preventDefault();
    const element = event.target.elements;
    let value = {};
    for (let x of element) {
      value[x.name] = x.value;
    }
    delete value[""];
    createUserEmailAndPassword(value.email, value.password);
    navigate("/")
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Registration
        </h1>
        <form className="space-y-4" onSubmit={submitHandler}>
          {/* <div>
            <label htmlFor="name">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered input-primary"
              name="name"
              id="name"
              required
            />
          </div> */}
          <div>
            <label htmlFor="email">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
              name="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
              name="password"
              id="password"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="cursor-pointer text-primary font-semibold underline">
            Login With Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
