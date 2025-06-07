import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1f1c2c] to-[#302b63] flex flex-col items-center justify-center text-white relative overflow-hidden px-4">
      
      {/* Logo Section */}
      <div className="absolute top-5 left-6 z-50">
        <img
          src="/photos/logo.jpg" // Replace with your logo path
          alt="New Face Casting Logo"
          className="h-16 md:h-20 object-contain"
        />
      </div>

      {/* Floating Background Bubbles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 blur-lg"
            style={{
              width: 100,
              height: 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-[#D4AF37]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Discover the New Face of Modeling
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Join India’s premier platform for emerging models, casting directors, and talent agencies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Link to="/signup">
            <button className="px-6 py-3 bg-[#D4AF37] hover:bg-white hover:text-black rounded-full text-lg font-semibold shadow-lg transition-transform hover:scale-105">
              Get Discovered
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full text-lg font-semibold transition-transform hover:scale-105">
              Log In
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <div className="z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          {
            title: "Cast With Confidence",
            desc: "Connect with verified models and agencies in real time.",
          },
          {
            title: "Build Your Portfolio",
            desc: "Showcase your talent with professional photos and videos.",
          },
          {
            title: "India’s Fastest Growing Platform",
            desc: "Trusted by 10,000+ talents and brands across the country.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 + i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
