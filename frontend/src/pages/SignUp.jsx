import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
      // Simulate registration with Internet Identity
      // You would typically redirect to the II provider for authentication and registration
      navigate("/", {
        state: { user: true },
      });
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg dark:bg-gray-800 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
            Create an Account
          </h2>
          <p className="text-center text-lg text-gray-500 dark:text-gray-300 mb-8">
            Register using Internet Identity
          </p>
          <button
            onClick={handleRegister}
            className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Register with Internet Identity
          </button>
        </div>
      </div>
    );
  };

export default SignUp;