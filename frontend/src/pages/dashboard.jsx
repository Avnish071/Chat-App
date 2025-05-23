import React from "react";
import { motion } from "framer-motion";
import { Home, MessageSquare, PlusSquare, User, Search, Settings, Moon } from "lucide-react";

export default function ChatVerseHomePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-4 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="hidden md:block">
                  <p className="text-gray-800 dark:text-white font-medium">User {i}</p>
                  <p className="text-xs text-gray-500">Last message...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4 mt-8">
          <Settings className="text-gray-500 dark:text-gray-300 cursor-pointer" />
          <Moon className="text-gray-500 dark:text-gray-300 cursor-pointer" />
          <User className="text-gray-500 dark:text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Stories */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full w-full h-full flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-white">
                {i === 0 ? "+" : `U${i}`}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden">
              <div className="flex items-center space-x-3 p-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">User {i}</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <p className="text-gray-800 dark:text-gray-300 mb-2">This is a sample post caption for User {i}.</p>
                <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                <div className="flex justify-around mt-3 text-gray-600 dark:text-gray-300">
                  <button>❤️</button>
                  <button>💬</button>
                  <button>📤</button>
                  <button>🔖</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-2 flex justify-around md:hidden">
        <Home />
        <Search />
        <MessageSquare />
        <PlusSquare />
        <User />
      </div>
    </div>
  );
}