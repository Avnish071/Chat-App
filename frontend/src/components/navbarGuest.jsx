import React from "react";
import { NavLink } from "react-router-dom";

const NavbarGuest = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <NavLink to="/">CHIT-CHAT</NavLink>
      </div>
      <div className="space-x-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
               isActive ? "bg-yellow-700" : "bg-white-600 hover:bg-blue-700"
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? "bg-yellow-700" : "bg-white-600 hover:bg-blue-700"
            }`
          }
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarGuest;
