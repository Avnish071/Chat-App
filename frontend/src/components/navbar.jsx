import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Utility function to apply styles based on active state
  const navButtonClass = ({ isActive }) =>
    `btn btn-ghost rounded-btn ${isActive ? "btn-primary text-white" : ""}`;

  const authButtonClass = (path) => ({ isActive }) =>
    `btn btn-sm ${isActive ? "btn-primary text-white" : "btn-outline"}`;

  return (
    <div className="navbar bg-gradient-to-r from-white via-slate-100 to-white shadow-md px-6">
      {/* Left side */}
      <div className="flex-1 flex items-center space-x-4">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">
          ChatApp
        </NavLink>
        <NavLink to="/" className={navButtonClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navButtonClass}>
          About
        </NavLink>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4 ml-auto">
        <NavLink to="/login" className={authButtonClass("/login")}>
          Login
        </NavLink>
        <NavLink to="/signup" className={authButtonClass("/signup")}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}
