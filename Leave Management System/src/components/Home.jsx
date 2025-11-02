import React from "react";

function Home() {
  return (
    <div className="min-h-screen w-full rounded-2xl m-5 bg-white text-white flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 text-black">
          Welcome to <span className="text-gray-600 hover:text-blue-600">Leave Management System</span>
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          Manage your leaves efficiently — Apply, Check Status, and Stay Updated.
        </p>

        {/* Button */}
        <button className="bg-white text-black px-8 py-3 border border-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md hover:border-gray-300 hover:px-10 hover:py-5 hover:font-bold">
          Get Started
        </button>
      </div>

      {/* SVG Illustration */}
      <div className="mt-16 w-80 sm:w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          fill="black"
          className="opacity-80 hover:opacity-100 transition-all duration-500"
        >
          <path d="M256 48a48 48 0 1 1 96 0A48 48 0 1 1 256 48zm128 128a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h-16a16 16 0 0 0-16 16v128h192V288a16 16 0 0 0-16-16h-16V176zm128 64a16 16 0 0 0-16-16h-32v-16a80 80 0 0 0-80-80h-16a80 80 0 0 0-80 80v16h-32a16 16 0 0 0-16 16v16h288v-16zM64 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm480 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
        </svg>
      </div>
    </div>
  );
};

export default Home;
