import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
