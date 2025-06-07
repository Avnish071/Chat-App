import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-1 bg-white shadow-md">
      {/* Logo section */}
      <div className="flex items-center space-x-3 cursor-pointer">
        {/* Replace the div below with your actual logo img if you have */}
       <img
          src="/photos/logo.jpg"
          alt="Logo"
          className="h-16 w-auto object-contain"
        />
        {/* <div
          className="text-2xl font-semibold tracking-wider"
          style={{ color: '#D4AF37' }}
        >
          New Face Casting
        </div> */}
      </div>

      {/* Menu items */}
      <ul className="hidden md:flex space-x-10 text-[#D4AF37] text-lg font-medium">
        <li className="border-b-2 border-[#D4AF37] pb-1 cursor-pointer">Home</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Models</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Actors</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">About Us</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Contact Us</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Join Us</li>
      </ul>

      {/* Right side buttons and menu icon */}
      <div className="flex items-center space-x-5">
        <button
          className="bg-[#D4AF37] text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition text-sm font-semibold"
          type="button"
        >
          Request A Call Back
        </button>

        {/* Hamburger menu for small screens */}
        <Menu className="w-7 h-7 text-[#D4AF37] md:hidden cursor-pointer" />
      </div>
    </nav>
  );
}
