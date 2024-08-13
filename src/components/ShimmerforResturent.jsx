import React from 'react';

const Shimmer = () => {
  return (
    <>
      <div className='menu h-[500px] p-4 mt-4 bg-slate-800 grid items-center'>
        <div className='w-[40%] ml-10 bg-slate-200 p-2 rounded-lg'>
          <div className='w-[200px] h-[200px] rounded-xl border border-black-500 bg-gray-300 animate-pulse'></div>
        </div>
        <div className='ml-10'>
          <h1 className='h-8 w-[60%] mb-4 bg-gray-300 animate-pulse'></h1>
          <div>
            <h3 className='h-6 w-[50%] mb-2 bg-gray-300 animate-pulse'></h3>
            <h3 className='h-6 w-[50%] mb-2 bg-gray-300 animate-pulse'></h3>
            <h3 className='h-6 w-[70%] mb-2 bg-gray-300 animate-pulse'></h3>
            <h3 className='h-6 w-[50%] mb-2 bg-gray-300 animate-pulse'></h3>
            <h4 className='h-6 w-[50%] bg-gray-300 animate-pulse'></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
