import React from 'react';
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