

import React from 'react';
import { FaWindows } from 'react-icons/fa';

const Valorant = () => {
  return (
    <div className="relative min-h-screen  bg-[#3D352A]/50 backdrop-blur-[40px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]  flex flex-col items-center justify-center text-white px-6 py-12">
      
      {/* Top-right corner - Friends playing info */}
      <div className="absolute top-14 right-6 flex flex-col items-end space-y-1">
        <div className="flex items-center text-white text-sm">
          <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
          <span>40 of your friends are playing</span>
        </div>
        <div className="flex items-center text-amber-400 text-xl">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-500">★</span>
          <span className="text-gray-500">★</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col pr-50 items-center ml-60 max-w-3xl w-full mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-7xl pr-40 md:text-8xl font-bold mb-2 tracking-wider">Valorant</h1>

        {/* Release Date */}
        <div className="bg-gray-900 flex justify-end bg-opacity-70 ml-62 w-150 px-4 py-2 pr-10 mr-50 mb-8 rounded-sm">
  <p className="text-xs text-right font-semibold tracking-widest">
    RELEASE DATE : 30TH DECEMBER
  </p>
</div>


        {/* Description */}
        <p className="text-gray-300 text-left leading-relaxed ml-5 mb-12 text-lg max-w-2xl">
          Players assume the role of Deacon St. John, a former bounty hunter struggling to survive
          in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players
          are surrounded by death and danger on all sides, the world that they get to explore feels
          as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
        </p>

        {/* Button + Platform */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Play Now Button */}
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 rounded-full transition text-lg">
            Play Now
          </button>

          {/* Platform Info */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <p className="text-gray-300">Available on :</p>
            <div className="flex gap-2">
              <FaWindows className="text-4xl" />
              <span className="text-5xl font-thin">iOS</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <p className="text-gray-400 mr-62 mt-4">Buy now for $40 only</p>
      </div>
    </div>
  );
};

export default Valorant;