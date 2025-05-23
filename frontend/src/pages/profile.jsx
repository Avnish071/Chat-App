import React, { useContext, useState } from "react";
import { AuthContext } from "../components/authcontext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [tab, setTab] = useState("info");

  return (
    <div className="w-full min-h-screen flex bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Left Sidebar */}
      <div className="w-1/4 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-8">
        {/* Profile Picture */}
        <img
          src={user?.avatar || "/photos/logo.jpg"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-lg font-semibold mb-6">{user?.fullName || "fullName"}</h2>

        {/* Sidebar Options */}
        <div className="flex flex-col space-y-4 w-full px-4">
          <button onClick={() => setTab("info")} className={`text-left w-full py-2 px-3 rounded-md ${tab === "info" ? "bg-blue-100 dark:bg-blue-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>Info</button>
          <button onClick={() => setTab("status")} className={`text-left w-full py-2 px-3 rounded-md ${tab === "status" ? "bg-blue-100 dark:bg-blue-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>Status</button>
          <button onClick={() => setTab("settings")} className={`text-left w-full py-2 px-3 rounded-md ${tab === "settings" ? "bg-blue-100 dark:bg-blue-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>Settings</button>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-3/4 p-8">
        {tab === "info" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Profile Info</h1>
            <p><strong>Name:</strong> {user?.fullName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Bio:</strong> {user?.bio || "No bio added."}</p>
          </div>
        )}

        {tab === "status" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Status</h1>
            <p>Status functionality will go here.</p>
          </div>
        )}

        {tab === "settings" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p>Settings options will go here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
