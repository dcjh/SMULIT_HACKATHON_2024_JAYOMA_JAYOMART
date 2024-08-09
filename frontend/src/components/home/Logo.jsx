import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Cruip">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path
          className="fill-purple-500"
          fillRule="evenodd"
          d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
          clipRule="evenodd"
        />
        <path
          className="fill-purple-300"
          fillRule="evenodd"
          d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-800">Jayomart</span>
    </Link>
  );
}
