import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Updated: Added phone in API call
async function registerUser({ fullName, email, password, age, gender, phone }) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ fullName, email, password, age, gender, phone }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Signup failed");
    return data;
  } catch (error) {
    throw error;
  }
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    phone: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="absolute top-4 left-6 z-50">
        <img
          src="/photos/logo.jpg"
          alt="Logo"
          className="h-32 w-auto object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-[#111] shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl"
      >
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#111] text-white">
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <UserPlus className="h-7 w-7 text-[#D4AF37]" />
                <h1 className="text-2xl font-bold text-[#D4AF37]">Create Your Account</h1>
              </div>
              <p className="text-sm text-gray-300">Join us and start your journey today.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="e.g., John Doe"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* 📱 Phone Input */}
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="e.g., 9876543210"
                  pattern="[0-9]{10}"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Age</label>
                <input
                  name="age"
                  type="number"
                  placeholder="e.g., 21"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={form.age}
                  onChange={handleChange}
                  required
                  min={1}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Gender</label>
                <select
                  name="gender"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-transparent border border-[#D4AF37] text-white p-2 pr-10 rounded"
                    value={form.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#D4AF37]"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">Must be at least 6 characters</p>
              </div>

              {error && (
                <p className="text-center text-sm font-medium text-red-500">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black py-2 rounded hover:bg-white transition"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="text-sm text-gray-300 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-[#D4AF37] hover:underline">
                Log in
              </a>
            </div>
          </div>
        </div>

        {/* Right: Video Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/photos/video/starmodel.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
