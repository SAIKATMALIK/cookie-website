import React from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RiBaseStationLine } from "react-icons/ri";
import { IoCloudOffline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

const Header = () => {
  const Onlinestatus=useOnlineStatus();
  return (
    <>
      <div className='flex justify-between items-center  p-4 bg-[#374151] text-white rounded-sm shadow-lg '>
        <div className="logo pl-5 flex items-center">
      <MdFastfood size={20}/>
      cookie
        </div>
        <div className="router ">
          <ul className='flex space-x-4 pr-5'>
          <li className='border bg-blue-600 text-white rounded-md p-2'>{Onlinestatus?<RiBaseStationLine size={18}/>:<IoCloudOffline size={18}/>}</li>
            <li><Link to="/">Home</Link></li>
           <li><Link to="/grocery">Grocery</Link></li> 
            
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/resturent">Restaurant</Link></li> */}
            <li><Link to="/login" className='bg-[#eab308] text-black p-3 rounded-lg'>Login</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
