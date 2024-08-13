import React from 'react';
import Shimmercard from './Shimmercard';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array.from({ length: 15 }).map((_, index) => (
        <Shimmercard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
