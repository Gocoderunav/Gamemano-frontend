'use client';
import React from 'react';

const ProductFilters = () => {
  return (
    <aside className="w-64 bg-[#1e1e1e] p-6 rounded-lg text-white space-y-8">
      
      {/* Categories */}
      <div>
        <h2 className="text-lg font-bold mb-3">Categories</h2>
        <ul className="space-y-2">
          {["Indy", "Adventure", "MMO", "Action", "Strategy", "Simulator", "Sports"].map((category) => (
            <li key={category}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox text-orange-400" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Platforms */}
      <div>
        <h2 className="text-lg font-bold mb-3">Platforms</h2>
        <ul className="space-y-2">
          {["PC", "PlayStation 5", "PlayStation 4", "Xbox Series", "Nintendo Switch"].map((platform) => (
            <li key={platform}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox text-orange-400" />
                {platform}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Type */}
      <div>
        <h2 className="text-lg font-bold mb-3">Type</h2>
        <ul className="space-y-2">
          {["Paid", "Free"].map((type) => (
            <li key={type}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox text-orange-400" />
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h2 className="text-lg font-bold mb-3">Price</h2>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="$ 40" className="bg-black/50 w-16 p-1 rounded-md text-center" />
          <span>-</span>
          <input type="text" placeholder="$ 55" className="bg-black/50 w-16 p-1 rounded-md text-center" />
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h2 className="text-lg font-bold mb-3">Ratings</h2>
        <ul className="space-y-2">
          {[5, 4, 3].map((stars) => (
            <li key={stars}>
              <label className="flex items-center gap-1 cursor-pointer">
                {[...Array(stars)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
                {[...Array(5 - stars)].map((_, i) => (
                  <span key={i} className="text-gray-500">★</span>
                ))}
                <span className="text-sm ml-1 text-gray-300">& Up</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filters Button */}
      <button className="bg-orange-400 hover:bg-orange-500 w-full py-2 rounded-full font-semibold">
        Apply Filters
      </button>

    </aside>
  );
};

export default ProductFilters;
