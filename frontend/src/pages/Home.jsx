import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserHeader from "../components/header/UserHeader";
import GuestHeader from "../components/header/GuestHeader";
import smuLogo from "../assets/smu.svg";
import icpLogo from "../assets/icp.svg";
import molLogo from "../assets/mol.svg";
import { useSnackbar } from "notistack";

const Home = () => {
  const [user, setUser] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.user === true) {
      setUser(true);
    }
  }, [location.state]);

  const handleBrowseMartClick = () => {
    if (!user) {
      enqueueSnackbar("Please Sign In", { variant: "error" });
      navigate("/");  // Redirect to the homepage or login page
    } else {
      navigate("/dataMart", { state: { user: user } });
    }
  };

  return (
    <>
      {!user ? <GuestHeader /> : <UserHeader setUser={setUser}/>}
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="container mx-auto">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Shaping AI with <br />
                <span className="text-primary dark:text-white">safe data.</span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                AI is the new frontier of technology. To train your AI into the best model, you require the Best and most Accurate Data. Jayomart offers blockchain encryption 
                technology that prevents the training Data that you purchase from being corrupted! The data is immutable, ensuring that you get the Data you purchased. 
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <button
                    onClick={handleBrowseMartClick}
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Browse Mart
                  </span>
                </button>
              </div>
              <div className="hidden py-8 mt-12 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    THE SAFEST
                  </h6>
                  <p className="mt-2 text-gray-500">Your data remains does not change <br/> from the moment it is published</p>
                </div>
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    THE BEST ON THE MARKET
                  </h6>
                  <p className="mt-2 text-gray-500">ICP's blockchain technology is <br/> reputable around the world!</p>
                </div>
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    THE MOST RELIABLE
                  </h6>
                  <p className="mt-2 text-gray-500">Ensuring you get what you paid for</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={icpLogo}
                  className="h-12 w-auto ml-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={smuLogo}
                  className="h-[120px] w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={molLogo}
                  className="h-[120px] w-auto mr-auto mt-[-30px]"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
