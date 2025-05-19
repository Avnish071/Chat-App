import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-white flex items-start justify-start px-8 py-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 border border-gray-200 shadow-xl rounded-2xl">
          <div className="card-body space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <UserPlus className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-gray-800">
                  Create Your Account
                </h1>
              </div>
              <p className="text-sm text-gray-500">
                Join us and start your journey today.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., johndoe"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              {/* Password Field with Toggle */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-12 focus:input-primary"
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <label className="label">
                  <span className="label-text-alt text-xs text-gray-400">
                    Must be at least 6 characters
                  </span>
                </label>
              </div>

              <button className="btn btn-primary w-full mt-2">
                Create Account
              </button>

              {/* Divider + LinkedIn Sign-In */}
              <div className="divider">or</div>

              <a
                href="/auth/emi-tracker"
                className="btn w-full border border-gray-300 flex items-center justify-center gap-2 hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#0077B5]"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                    2.76 2.24 5 5 5h14c2.76 0 5-2.24 
                    5-5v-14c0-2.76-2.24-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.27c-.97 
                    0-1.75-.79-1.75-1.76s.78-1.76 
                    1.75-1.76 1.75.79 1.75 1.76-.78 
                    1.76-1.75 1.76zm13.5 
                    11.27h-3v-5.5c0-1.32-.03-3.03-1.85-3.03-1.86 
                    0-2.15 1.45-2.15 2.94v5.59h-3v-10h2.88v1.37h.04c.4-.76 
                    1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Sign in with LinkedIn
                </span>
              </a>
            </form>

            {/* Footer */}
            <div className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
