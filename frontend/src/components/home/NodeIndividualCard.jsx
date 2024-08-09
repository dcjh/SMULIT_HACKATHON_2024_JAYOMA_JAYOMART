import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import NodePeek from './NodePeek';


const NodeIndividualCard = ({ node }) => {
  const [nodePeek, setNodePeek] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl" onClick={() => (navigate(`/dataMart/details/${node._id}`))}>
      <h2 className="absolute top-3 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {`${new Date(node.createdAt).toLocaleString('default', { month: 'short' })} ${new Date(node.createdAt).getFullYear()}`}
      </h2>
      <h4 className="my-2 text-gray-500">{node._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{node.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{node.price}</h2>
      </div>
      <div className="flex justify-end items-center gap-x-4 mt-4 p-4">
        <BiShow 
            className="text-2xl text-green-800 hover:text-black" 
            onClick={(e) => {
                e.stopPropagation(); 
                setNodePeek(true);
            }}
        />
        <Link 
            to={`/dataMart/edit/${node._id}`}
            onClick={(e) => e.stopPropagation()}
        >
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link 
            to={`/dataMart/delete/${node._id}`}
            onClick={(e) => e.stopPropagation()}
        >
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
    </div>
    {
        nodePeek && (
            <NodePeek node={node} onClose={() => setNodePeek(false)} />
        )
    }
    </div>
  );
};

export default NodeIndividualCard;
