import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import GuestHeader from "../components/header/GuestHeader";
import UserHeader from "../components/header/UserHeader";
import { useSnackbar } from "notistack";

const ShowNode = () => {
  const [node, setNode] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/dataMart/${id}`)
      .then((response) => {
        setNode(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    if (!location.state?.user) {
      navigate(`/signUp`);
      enqueueSnackbar("Please Sign In", { variant: "success" });
    }
    enqueueSnackbar("Successfully Acquired Data", { variant: "success" });
    navigate(`/dataMart`, { state: { user: location.state?.user } });
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-start py-20">
        <div
          aria-hidden="true"
          className="fixed inset-0 h-max w-full -z-10 m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        {!location.state?.user ? <GuestHeader /> : <UserHeader />}
        <div className="w-full max-w-4xl p-4 flex flex-col items-start">
          <BackButton user={location.state?.user} />
          <h1 className="text-2xl mb-4 mt-6 font-semibold">{node.title}</h1>
          <div className="flex flex-col border-2 border-primary rounded-xl w-full p-6 bg-gradient-to-br from-purple-100 to-blue-100 shadow-lg dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
            {/* <div className="mb-4">
              <span className="text-lg mr-4 font-semibold text-gray-600 dark:text-gray-300">
                Title:
              </span>
              <span className="text-black text-lg dark:text-white">
                {node.title}
              </span>
            </div> */}
            <div className="mb-4">
              <span className="text-lg mr-4 font-semibold text-gray-600 dark:text-gray-300">
                Price:
              </span>
              <span className="text-black text-lg dark:text-white">
                {node.price} ICP
              </span>
            </div>
            <div className="my-4">
              <span className="text-lg mr-4 font-semibold text-gray-600 dark:text-gray-300">
                Description:
                <br />
              </span>
              <span className="text-black dark:text-white whitespace-pre-wrap">
                {node.description}
              </span>
            </div>
            {node.bias && (
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-600 dark:text-gray-300">
                  Bias:
                </span>
                <span className="text-black dark:text-white">{node.bias}</span>
              </div>
            )}
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600 dark:text-gray-300">
                Date of Creation
              </span>
              <span className="text-black dark:text-white">
                {`${new Date(node.createdAt).getDate()} ${new Date(
                  node.createdAt
                ).toLocaleString("default", { month: "long" })} ${new Date(
                  node.createdAt
                ).getFullYear()}`}
              </span>
            </div>
            <button
              type="button"
              class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              onClick={() => handleSubmit()}
            >
              Acquire
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowNode;
