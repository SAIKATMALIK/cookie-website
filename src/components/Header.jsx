import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RiBaseStationLine } from "react-icons/ri";
import { IoCloudOffline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Onlinestatus = useOnlineStatus();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <MdFastfood size={24} />
            <span className="ml-2 text-xl font-semibold">cookie</span>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="text-base font-medium hover:text-blue-400" onClick={closeMenu}>Home</Link>
            <Link to="/grocery" className="text-base font-medium hover:text-blue-400" onClick={closeMenu}>Grocery</Link>
            <Link to="/about" className="text-base font-medium hover:text-blue-400" onClick={closeMenu}>About</Link>
            <Link to="/login" className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300" onClick={closeMenu}>Login</Link>
            <span className='border bg-blue-600 text-white rounded-md p-2'>
              {Onlinestatus ? <RiBaseStationLine size={18} /> : <IoCloudOffline size={18} />}
            </span>
          </div>
        </nav>

        {/* Mobile Menu */}
        <nav className="lg:hidden flex items-center justify-between h-16">
          <div className="flex items-center">
            <MdFastfood size={24} />
            <span className="ml-2 text-xl font-semibold">cookie</span>
          </div>

          <button type="button" onClick={toggleMenu} className="p-2 text-white transition-all duration-200 hover:bg-gray-700 rounded-md">
            {isMenuOpen ? (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 px-4 py-6 bg-gray-800 rounded-md shadow-md">
            <Link to="/" className="block text-base font-medium text-white hover:text-blue-400 py-2" onClick={closeMenu}>Home</Link>
            <Link to="/grocery" className="block text-base font-medium text-white hover:text-blue-400 py-2" onClick={closeMenu}>Grocery</Link>
            <Link to="/about" className="block text-base font-medium text-white hover:text-blue-400 py-2" onClick={closeMenu}>About</Link>
            <Link to="/login" className="block text-base font-medium text-white bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-300" onClick={closeMenu}>Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
