import React, { useEffect, useState, } from 'react';
import { FaStar } from "react-icons/fa6";
import Shimmer from './ShimmerforResturent';
import { useParams } from 'react-router-dom';
import useResinfo  from "../utils/useResinfo";

const RestaurantPage = () => {

  const{resid}=useParams();
const data=useResinfo (resid);
const [resInfo,setResinfo]=useState(null);
  
useEffect(()=>{
if(data){
  const transformedData=data.data.cards[2]?.card?.card?.info;
  setResinfo(transformedData);
}
},[data]);
  
   





  return (
    resInfo === null ? (
      <Shimmer />
    ) : (
      <>
        <div className='menu h-[500px] p-4   grid items-center  bg-[#0f172a] text-white'>
          <div className=' w-[40%] ml-10 bg-[#1e293b] p-2 rounded-lg'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`} alt="Restaurant" className='w-[200px] rounded-xl ' />
          </div>
          <div className='ml-10'>
            <h1 className='text-3xl font-bold text-white'>Resturent {resInfo.name}</h1>
            <div>
              <h3><span className='text-xl font-bold '>Rating: </span>{resInfo.avgRating} <FaStar className='inline'/></h3>
              <h3><span className='text-xl font-bold'>Cost for two: </span>{resInfo.costForTwoMessage}</h3>
              <h3><span className='text-xl font-bold'>our menu :</span>{resInfo.cuisines}</h3>
              <h3><span className='text-xl font-bold'>locality:</span>{resInfo.locality}</h3>
              <h4><span className='text-xl font-bold'>availble ?</span>{resInfo.availabilityServiceabilityMessage}</h4>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default RestaurantPage;
