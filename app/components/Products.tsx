'use client'
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import React, { useState } from 'react';
import Link from 'next/link';

const Products = () => {
  // Sample product data (you can replace this with dynamic data from props or API)
  const products = [
    {
      id: 1,
      imageUrl: "/1.jpg",
      name: "New Samsung Galaxy A31 128 Black",
      price: "2000 ETB",
      description: "AMOLED display with a 90Hz refresh rate, offering crisp colors and immersive visuals. Powerful performance for everyday tasks...",
      category: "Phones",
      isNew: true,
    },
    {
      id: 2,
      imageUrl: "/2.jpg",
      name: "Another Product Example",
      price: "1500 ETB",
      description: "High-quality item with excellent features. Perfect for your needs...",
      category: "Accessories",
      isNew: false,
    },
    {
      id: 3,
      imageUrl: "/3.jpg",
      name: "New Samsung Galaxy A31 128 Black",
      price: "2000 ETB",
      description: "AMOLED display with a 90Hz refresh rate, offering crisp colors and immersive visuals. Powerful performance for everyday tasks...",
      category: "Phones",
      isNew: true,
    },
    {
      id: 4,
      imageUrl: "/4.jpg",
      name: "Another Product Example",
      price: "1500 ETB",
      description: "High-quality item with excellent features. Perfect for your needs...",
      category: "Laptops",
      isNew: false,
    },
    {
      id: 5,
      imageUrl: "/4.jpg",
      name: "Another Product Example",
      price: "1500 ETB",
      description: "High-quality item with excellent features. Perfect for your needs...",
      category: "Laptops",
      isNew: false,
    },{
      id: 6,
      imageUrl: "/4.jpg",
      name: "Another Product Example",
      price: "1500 ETB",
      description: "High-quality item with excellent features. Perfect for your needs...",
      category: "Laptops",
      isNew: false,
    }
    // Add more products as needed
  ];

  // Sample categories
  const categories = ["All", "Phones", "Laptops", "Accessories"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className='relative'>
     
      {/* Content Below Hero */}
      <div className='flex'>
        {/* Categories Sidebar - Sticky on Left */}
        <div className='sticky top-20 h-screen w-1/5 p-6 bg-gray-50'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Categories</h1>
          <div className='bg-white shadow-lg rounded-2xl p-6'>
            <ul className='space-y-4'>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className='w-4/5 p-6'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left'>
            Our Products {selectedCategory !== "All" && `- ${selectedCategory}`}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='shadow-lg rounded-2xl bg-white flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative'>
                  <Image
                    src={product.imageUrl}
                    alt='product image'
                    width={1000}
                    height={100}
                    className='w-full h-64 object-cover'
                  />
                  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500 opacity-20 rounded-t-2xl'></div>
                  {product.isNew && (
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      New
                    </div>
                  )}
                </div>
                <div className='p-4 flex flex-col flex-grow'>
                  <div className='flex justify-between items-center mb-2'>
                    <h1 className='text-lg font-semibold text-gray-800'>{product.name}</h1>
                    <h1 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500'>{product.price}</h1>
                  </div>
                  <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                    {product.description}
                  </p>
                  <Link href={`/productsDetail/${product.id}`                  }
                  className=' flex justify-center mt-auto py-2 px-4'>
                  <button className='bg-linear-to-r from-orange-400 via-amber-400 w-full to-amber-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200'>
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;