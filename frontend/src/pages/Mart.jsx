import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CardView from "../components/mart/CardView";
import UserHeader from "../components/header/UserHeader";
import GuestHeader from "../components/header/GuestHeader";

const Mart = () => {
  const [mart, setMart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state.user);

  useEffect(() => {
    axios
      .get("http://localhost:5555/dataMart")
      .then((response) => {
        setMart(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="relative py-16 min-h-screen">
        <div
          aria-hidden="true"
          className="fixed inset-0 h-max w-full -z-10 m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        {!user ? <GuestHeader /> : <UserHeader setUser={setUser}/>}
        <div className="p-4">
          <CardView mart={mart} user={user} setUser={setUser}/>
        </div>
      </div>
    </>
  );
};

export default Mart;
