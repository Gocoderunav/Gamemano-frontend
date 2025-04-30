'use client';
import React from 'react';
import { FaWindows } from 'react-icons/fa';

const Warlords = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-start justify-start px-16 py-20 mb-10 ">

      {/* Top-right corner - Friends playing info + Stars */}
      <div className="absolute top-10 right-10 flex flex-col items-end space-y-2">
        {/* Friends playing */}
        <div className="flex items-center text-sm">
          <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
          <span>40 of your friends are playing</span>
        </div>
        {/* Stars */}
        <div className="flex space-x-1">
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-gray-500 text-xl">★</span>
          <span className="text-gray-500 text-xl">★</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start max-w-4xl">

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-2 tracking-wider">
          Warlords
        </h1>

        {/* Release Date */}
        <div className="bg-gray-900 bg-opacity-80   w-120 px-6 py-1 mb-8 ">
          <p className="text-xs font-semibold text-right tracking-widest">
            RELEASE DATE : 30TH DECEMBER
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-10 text-lg max-w-3xl">
          Players assume the role of Deacon St. John, a former bounty hunter struggling to survive
          in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players
          are surrounded by death and danger on all sides, the world that they get to explore feels
          as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
        </p>

        {/* Button + Platform */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-2">
          {/* Play Now Button */}
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 rounded-full text-lg">
            Play Now
          </button>

          {/* Platform Info */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <p className="text-gray-300">Available on :</p>
            <div className="flex items-center gap-2">
              <FaWindows className="text-4xl" />
              <span className="text-5xl font-thin">iOS</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <p className="text-gray-400 mt-2">
          Buy now for $40 only
        </p>

      </div>
    </div>
  );
};

export default Warlords;
