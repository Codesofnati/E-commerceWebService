import React from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';

const Product = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <NavBar />
      {/* Hero Section */}
      <div 
        className='relative h-96 flex items-center justify-center text-white overflow-hidden'
        style={{
          backgroundImage: 'url(/hero-image.jpg)', // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay for Brand Consistency and Text Readability */}
        <div className='absolute inset-0 bg-linear-to-r from-orange-600 via-amber-500 to-amber-600 opacity-60'></div>
        {/* Content */}
        <div className='relative z-10 text-center px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg'>
            Discover Amazing Products
          </h1>
          <p className='text-lg md:text-xl mb-8 drop-shadow-md'>
            Explore our latest collection of high-quality items at unbeatable prices.
          </p>
          <button className='bg-white text-amber-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200'>
            Shop Now
          </button>
        </div>
        {/* Decorative Elements (Optional) */}
        <div className='absolute bottom-0 left-0 w-full h-16 bg-white opacity-10 transform rotate-1'></div>
         <div className='absolute bottom-0 left-110 w-full h-16 bg-white opacity-10 transform rotate-70'></div>
      </div>
      {/* Products Section */}
      <div className='pt-8 pb-16'>
        <Products />
      </div>
    </div>
  );
};

export default Product;