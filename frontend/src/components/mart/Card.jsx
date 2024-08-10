import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import CardPreview from "./CardPreview";
import pic0 from '../../assets/pic0.webp';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.png';
import pic5 from '../../assets/pic5.png';
import pic6 from '../../assets/pic6.jpg';
import pic7 from '../../assets/pic7.jpeg';
import pic8 from '../../assets/pic8.jpg';

const Card = ({ node, user, index, setUser }) => {
  const [cardPreview, setCardPreview] = useState(false);
  const navigate = useNavigate();

  const images = [pic0,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8];
  const imageSrc = images[index] || images[0];

  const handleNavigate = () => {
    if (!user) {
      setUser(false);
    }
    navigate(`/dataMart/details/${node._id}`, { state: { user: user, index: index }});
  };

  return (
    <div 
        className="bg-white rounded-lg shadow dark:bg-gray-800 flex flex-col h-full min-h-[300px] relative"
        onClick={handleNavigate}
    >
      <div className="relative w-full h-1/3 flex-shrink-0">
        <img
          src={imageSrc}
          alt="shopping image"
          className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow relative">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-lg font-semibold dark:text-gray-50">
              {node.title}
            </h1>
            <IoMdMore
              className="text-2xl text-green-800 hover:text-black cursor-pointer mt-0.5"
              onClick={(e) => {
                e.stopPropagation();
                setCardPreview(true);
              }}
            />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            {`Published on : ${new Date(node.createdAt).toLocaleString("default", {
              month: "short",
            })} ${new Date(node.createdAt).getFullYear()}`}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300">
            {node.bias && `Bias : ${node.bias}`}
          </div>
        </div>
        <div className="absolute bottom-3 right-0 bg-purple-100 text-purple-800 font-semibold text-base pl-8 pr-4 py-2 triangle">
          {node.price} ICP
        </div>
      </div>
      {cardPreview && (
        <CardPreview node={node} onClose={() => setCardPreview(false)} />
      )}
    </div>
  );
};

export default Card;
