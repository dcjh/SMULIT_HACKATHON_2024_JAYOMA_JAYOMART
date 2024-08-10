import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import Logo from "./Logo";

const UserHeader = ({ setUser }) => {
  const [top, setTop] = useState(true);
  const navigate = useNavigate();

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleLogout = () => {
    setUser(false); // Update the user state to false
    navigate("/");  // Redirect to the home page
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <Link
            to="/dataMart/create"
            className="py-[5px] px-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all text-purple-600 shadow hover:bg-purple-500 hover:text-gray-200"
          >
            <MdOutlineAddBox />
          </Link>
          <button
            onClick={handleLogout}
            className="relative flex py-[5px] w-full items-center justify-center px-3 before:absolute before:inset-0 before:rounded-lg before:border before:border-transparent before:bg-primary/20 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max before:shadow"
          >
            <span className="relative text-sm text-gray-500">LogOut</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
