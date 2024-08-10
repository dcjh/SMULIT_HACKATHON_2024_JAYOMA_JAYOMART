import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the Internet Identity provider for authentication
    navigate("/", {
      state: { user: true },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg dark:bg-gray-800 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Welcome Back!
        </h2>
        <p className="text-center text-lg text-gray-500 dark:text-gray-300 mb-8">
          Sign in using Internet Identity
        </p>
        <button
          onClick={handleLogin}
          className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Sign in with Internet Identity
        </button>
      </div>
    </div>
  );
};

export default SignIn;
