import React, { useState } from "react";
import loginImage from '../assets/login-image.png'
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full m-5 flex items-center justify-center bg-white text-white rounded-2xl">
      <div><img src={loginImage} alt="image" className="w-100 ml-20"/></div>
      <div className="w-1/2 mx-auto bg-black  rounded-2xl shadow-2xl p-8 border border-white/10">
        <h1 className="text-3xl font-bold mb-2 text-center tracking-wide">Welcome Back</h1>
        <p className="text-gray-200 text-center mb-8">Login to your account</p>

        <form className="space-y-6">
          {/* This is username input div */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Username</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
          </div>

          {/*This is Password Input div */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <div className="flex border border-gray-500 rounded-lg">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-transparent  focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-white transition-all "
              required />
            </div>
          </div>

          {/* Submit Button to login */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-xl shadow hover:bg-gray-300 transition duration-300"
            onClick={() =>{alert(`Login Sucessful`); }}>
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-white hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
