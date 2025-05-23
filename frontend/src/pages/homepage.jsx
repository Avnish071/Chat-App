import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400 opacity-20"
            style={{ width: 100, height: 100, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to Chat-World
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Connect. Explore. Share Moments — Chat like never before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Link to="/signup">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-700 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
              Log In
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <div className="z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Seamless Chat",
            desc: "Chat in real-time with a fast, smooth experience.",
          },
          {
            title: "Explore Creators",
            desc: "Discover and connect with creators from around the world.",
          },
          {
            title: "Share Your Story",
            desc: "Post updates and media like Instagram stories.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-white/20 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 + i * 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-200 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;