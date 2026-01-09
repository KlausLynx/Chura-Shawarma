// import React, { useState, useRef } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, Star, Heart } from 'lucide-react';
import heroImage from './assets/beef-suya-roadside-night-1024x768.jpg';

export default function SuyaWebApp() {
  const categories = ['all', 'beef', 'chicken', 'goat', 'combos', 'sides'];
  return(
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative text-white py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-br from-red-700 via-orange-600 to-red-600'>
        <div 
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center'
        }}>
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/60'></div>
        </div>

        <div className='container mx-auto px-4 relative'>
          <div className='text-center'>
            <span className='inline-block bg-amber-400 text-red-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 animate-pulse'> 🔥 NOW OPEN IN HOUSTON </span>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6'> Where Every Bite Tells a Story </h2>
            <p className='text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-orange-100'>Authentic African suya, grilled frsh daily with our secret family recipe</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className='bg-orange-400 shadow-md sticky-top-0'>
        <div className='container flex flex-col sm:flex-row px-4 py-3 mx-auto'>
            <span className='text-xs sm:text-sm font-semibold text-gray-700'>Filter:</span>
            <div className='grid grid-cols-3 sm:flex gap-2 sm:gap-3'>
              {categories.map(cat => (
                <button key={cat} className= 'px-3 sm:px-6 py-2 rounded-full text-xs sm:text-base font-semibold transition cursor-pointer' >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}