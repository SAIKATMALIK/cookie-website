import React from 'react'

const Shimmercard = () => {
  return (
    <>
         <div className='p-4 border border-gray-300 h-fit w-[250px] m-2 animate-pulse'>
      <div className="w-full bg-slate-500 h-[150px] mb-4"></div> {/* Image placeholder */}
      <div className="w-full bg-slate-500 h-[20px] mb-2"></div>
      <p className="w-1/2 bg-slate-500 h-[10px] mb-2"></p>
      <p className="w-2/3 bg-slate-500 h-[10px] mb-2"></p>
      <div className="mt-4">
        <p className="w-1/3 bg-slate-500 h-[10px] mb-2"></p>
        <span className="w-1/4 bg-slate-500 h-[10px]"></span>
      </div>
    </div>
    </>
  )
}

export default Shimmercard
