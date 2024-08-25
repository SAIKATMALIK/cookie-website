import React from 'react'
import { Link }from "react-router-dom";
import { MdFastfood } from "react-icons/md";

const Footer = () => {
  return (
    <>
<div className=' mx-auto grid lg:grid-cols-3 w-full text-center md:grid-cols-2 sm:grid-cols-1 gap-y-5 pb-[50px] place-content-center pt-3 bg-[#1e293b] text-white'>
  <div className="footer-left my-auto">

    <h1 className='flex items-center justify-center'><MdFastfood size={20}/>cookie</h1>
    <p>we are happy to serve you!😊</p>
    
  </div>

  <div className="footer-middle">

          <ul className='inline-block text-center py-4  font-bold text-[16px] my-auto'>
            <li><Link to="/">Home</Link></li>
           <li><Link to="/grocery">Grocery</Link></li> 
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resturent">Restaurant</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>please add the chrome..<br/> extension CORS to see the website</li>
          </ul>
        </div>
 
  <div className="footer-right my-auto">
    <h1>created with ❤️By Saikat</h1>
  </div>
  </div>
    </>
  )
}

export default Footer
