import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UserHeader from "../components/header/UserHeader";
import GuestHeader from "../components/header/GuestHeader";
import smuLogo from "../assets/smu.svg";
import icpLogo from "../assets/icp.svg";
import molLogo from "../assets/mol.svg";

const Home = () => {
  const [user, setUser] = useState(true);

//   const location = useLocation();
//   if (location.state.user !== user) {
//     setUser(location.state.user);
//   }

  return (
    <>
      {!user ? <GuestHeader /> : <UserHeader />}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                incidunt nam itaque sed eius modi error totam sit illum.
                Voluptas doloribus asperiores quaerat aperiam. Quidem harum
                omnis beatae ipsum soluta!
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link
                  to="/dataMart"
                  state={{ user: user }}
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Browse Mart
                  </span>
                </Link>
              </div>
              <div className="hidden py-8 mt-12 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
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
