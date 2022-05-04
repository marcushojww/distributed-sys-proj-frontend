import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <div className="space-x-20 flex justify-center items-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20">
      <NavLink
        to={"/home"}
        className="text-xl "
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive && "underline",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to={"/cart"}
        className="text-xl"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive && "underline",
        })}
      >
        Shopping cart
      </NavLink>
      <button
        className="focus:shadow-outline w-20 self-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
