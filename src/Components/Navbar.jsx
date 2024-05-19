


import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-color2 lg:mr-16 lg:ml-16 mt-10 rounded-xl relative z-1 h-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-24 items-center">
            <img src='Havok Logo.svg' className='pt-2 pb-2 md:p-5 lg:p-2 sm:p-5 object-cover' alt='Havok Logo' />

            {/* Menu button (hidden on larger screens) */}
            <div className="flex items-center mr-2 md:hidden">
              <button id="menu-toggle" className="focus:outline-none" onClick={toggleMenu}>
                <svg className="h-16 w-16" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Navbar links */}
            <div className="hidden md:flex md:items-center lg:space-x-10 md:space-x-4 text-2xl">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="border-2 border-black rounded-3xl px-6 py-1 bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-400/80 font-medium text-center me-2 mb-2">Join Us</a>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div id="mobile-menu" className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-5  sm:px-3 bg-color3 text-2xl  ">
            <a href="#" className=" block hover:underline">About Us</a>
            <a href="#" className=" block hover:underline">Services</a>
            <a href="#" className=" block hover:underline">Contact</a>
            <a href="#" className=" block hover:underline   border-2 border-color1 rounded-2xl p-2 w-32">Join Us</a>
          </div>
        </div>
      </nav>
      <div className='h-10 md:ml-24 md:mr-24 rounded-xl bg-color3 mt-[-20px]'></div>
    </>
  );
};

export default Navbar;
