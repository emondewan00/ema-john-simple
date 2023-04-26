import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const singOut = () => {
    logOut();
  };
  return (
    <nav className=" bg-[#1C2B35] py-8 ">
      <div className="flex container mx-auto text-white justify-between">
        <div>
          <img src="/images/Logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex ">
            <li className="me-3">
              <Link to="/">Home</Link>
            </li>
            <li className="me-3">
              <Link to="/orderReview">OrderReview</Link>
            </li>
            <li className="me-3">
              <Link to="/inventory">Inventory</Link>
            </li>
            {user ? (
              <li className="me-3 cursor-pointer" onClick={singOut}>
                Logout
              </li>
            ) : (
              <li className="me-3">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
