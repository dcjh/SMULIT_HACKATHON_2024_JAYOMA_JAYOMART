import React from 'react';
import NodeIndividualCard from './NodeIndividualCard';
import Card from './Card';

const CardView = ({ mart }) => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {mart.map((node) => (
          <Card key={node._id} node={node} />
        ))}
      </div>
    </div>
  );
};

export default CardView;

