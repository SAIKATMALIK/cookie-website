import React from 'react';
import { ImCross } from "react-icons/im";
import { AiOutlineCheck } from "react-icons/ai";
import { ImRss } from "react-icons/im";
const Cards = ({resname,id,isOpen,locality,rating,image}) => {
  return (
    <div className=' inline-block p-4 bg-[#1e293b] h-fit w-[250px] m-2 rounded-lg'>
    <img src={image} alt="" className='w-[200px] h-[100px] object-cover rounded-md' />
    <h2>{resname}</h2>
    <h2>place:{locality}</h2>
    <p>{id}</p>
   
   <div className='flex items-center justify-between'>
   <p>online status</p>
   <span>{isOpen?<ImRss />:<ImCross/>}</span>
   </div>
   <p>Rating:{rating}</p>
    </div>
  );
};

export default Cards;
