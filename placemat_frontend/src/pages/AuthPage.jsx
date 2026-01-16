import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Code2, Mail, Lock, User, Building } from "lucide-react";

export default function AuthPage() {

  const location = useLocation();
  const navigate = useNavigate();

  // Read mode from URL: /auth?mode=login OR /auth?mode=signup
  const query = new URLSearchParams(location.search);
  const urlMode = query.get("mode") === "signup" ? "signup" : "login";

  // Set login or signup mode based on URL
  const [isLogin, setIsLogin] = useState(urlMode === "login");

  // When user toggles Login <-> Signup
  const switchMode = () => {
    const newMode = isLogin ? "signup" : "login";
    setIsLogin(!isLogin);
    navigate(`/auth?mode=${newMode}`);
  };

  // Fallback image logic
  const [imgError, setImgError] = useState(false);
  const heroImg =
    "https://images.unsplash.com/photo-1701576766277-c6160505581d?auto=format&q=80&w=1080";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="mb-8">
            <button
              onClick={() => onNavigate("landing")}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PlaceMate
              </span>
            </button>

            <h1 className="text-3xl mb-2">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Enter your credentials to continue"
                : "Sign up to start your placement preparation"}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full border rounded-xl pl-11 py-6 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border rounded-xl pl-11 py-6 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm">College/University</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your College Name"
                    required
                    className="w-full border rounded-xl pl-11 py-6 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full border rounded-xl pl-11 py-6 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Rememeber me (only login) */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button className="text-blue-600 hover:text-purple-600">
                  Forgot password?
                </button>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t"></div>
              <span className="px-4 text-sm text-gray-500 bg-white">
                Or continue with
              </span>
              <div className="flex-grow border-t"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full py-6 border rounded-xl flex items-center justify-center gap-3 font-medium bg-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Toggle Login / Signup */}
            <div className="text-center text-sm mt-4">
              <span className="text-gray-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
              </span>

              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-purple-600"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
            <img
              src={imgError ? "/fallback-img.png" : heroImg}
              alt="Student learning"
              className="relative rounded-3xl shadow-2xl"
              onError={() => setImgError(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
