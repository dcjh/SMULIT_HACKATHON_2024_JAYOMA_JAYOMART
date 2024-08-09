import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import NodeIndividualCard from './NodeIndividualCard';

const NodeCard = ({ mart }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {mart.map((node) => (
            <NodeIndividualCard key={node._id} node={node} />
        ))} 
    </div>
  )
}

export default NodeCard;