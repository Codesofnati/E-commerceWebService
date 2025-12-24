'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using react-icons

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-linear-to-r from-orange-400 via-amber-400 to-amber-500 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='shrink-20'>
            <Image
              src="/logoone.png"
              alt='logo'
              width={52}
              height={40}
              className='h-10 w-auto'
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex space-x-8'>
            <a href="#" className='text-white hover:text-amber-200 transition-colors duration-200 font-medium'>Home</a>
            <a href="#" className='text-white hover:text-amber-200 transition-colors duration-200 font-medium'>Products</a>
            <a href="#" className='text-white hover:text-amber-200 transition-colors duration-200 font-medium'>About</a>
            <a href="#" className='text-white hover:text-amber-200 transition-colors duration-200 font-medium'>Contact</a>
          </div>

          {/* Search Bar and User Icon */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search...'
                className='bg-white bg-opacity-20 text-white placeholder-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-300'
              />
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white' />
            </div>
            <FaUser className='text-white hover:text-amber-200 cursor-pointer transition-colors duration-200' size={20} />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white hover:text-amber-200 focus:outline-none'>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500 pb-4'>
            <div className='flex flex-col space-y-2'>
              <a href="#" className='text-white hover:text-amber-200 py-2 px-4 font-medium'>Home</a>
              <a href="#" className='text-white hover:text-amber-200 py-2 px-4 font-medium'>Products</a>
              <a href="#" className='text-white hover:text-amber-200 py-2 px-4 font-medium'>About</a>
              <a href="#" className='text-white hover:text-amber-200 py-2 px-4 font-medium'>Contact</a>
              <div className='relative mt-4'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-white bg-opacity-20 text-white placeholder-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-amber-300'
                />
                <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white' />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;