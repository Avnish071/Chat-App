import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Controller function (normally you'd move this to a separate file)
async function registerUser({ fullName, email, password }) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ fullName, email, password }),
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
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full"
      >
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <UserPlus className="h-7 w-7 text-primary" />
                <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
              </div>
              <p className="text-sm text-gray-500">Join us and start your journey today.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label-text block text-sm font-medium mb-1">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="e.g., John Doe"
                  className="input input-bordered w-full"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="label-text block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="label-text block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-12"
                    value={form.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">Must be at least 6 characters</p>
              </div>

              {error && (
                <p className="text-center text-sm font-medium text-red-600">{error}</p>
              )}

              <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            {/* Footer */}
            <div className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-medium hover:underline">
                Log in
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-100">
          <img
            src="/photos/landingimage.jpeg"
            alt="Signup Visual"
           className="h-[33rem]  object-cover rounded-xl shadow-lg"

          />
        </div>
      </motion.div>
    </div>
  );
}
