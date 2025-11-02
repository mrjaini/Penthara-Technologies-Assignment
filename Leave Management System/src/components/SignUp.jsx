import { useState } from "react";
import SignupImage from "../assets/signup-image.png"
import { NavLink } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name || "User"}`);
    setFormData({name:"", email:"", password:""})
  };

  return (
    <div className="min-h-screen w-full bg-white m-5 rounded-2xl flex items-center justify-center  text-white px-4">
      <div><img src={SignupImage} alt="image" className="w-100 ml-20" /></div>
      <div className="w-100 mx-auto bg-black rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <NavLink to='/login' className="text-white underline hover:text-gray-300">
                Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
