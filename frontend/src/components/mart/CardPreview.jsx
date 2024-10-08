import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const CardPreview = ({ node, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h4 className="my-2 text-gray-500">{node._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{node.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{node.price}</h2>
        </div>
        <div className="mt-2 flex justify-start items-center gap-x-2">
            <p className="font-semibold">Bias:</p>
            <p>{node.bias}</p>
        </div>
        <div className="mt-4 mb-2">
            <p className="font-semibold">About:</p>
            <p className="my-2">{node.preview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
