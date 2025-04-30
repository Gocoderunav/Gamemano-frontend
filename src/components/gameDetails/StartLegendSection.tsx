'use client';
import React from 'react';
import { FaWindows } from 'react-icons/fa'; // ✅ You missed this import

export default function StartLegendSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#1d1a16] to-black flex items-center justify-center px-8 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        
        {/* Left Box */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[350px] border border-white">
          {/* Slanted corner */}
          <div
            className="absolute top-0 right-0 w-6 h-6 bg-black"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
          ></div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start text-white max-w-md space-y-6 text-center">
          {/* Heading */}
          <div className="text-center mx-auto">
  <h4 className="text-orange-400 text-sm tracking-widest font-semibold mb-2">START YOUR</h4>
  <h2 className="text-4xl md:text-5xl font-bold text-orange-300">LEGEND</h2>
</div>


          {/* Paragraphs */}
          <p className="text-sm text-gray-300 leading-relaxed">
            Ac odio sodales mi leo vitae dui nibh turpis aliquet. Porttitor aenean egestas cras mauris at. Mi nisl turpis sodales aliquet. Quis risus lorem enim magna nisl.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Nibh vitae morbi urna sapien mattis dolor dictum massa id. Eget arcu nulla dolor nisi. Facilisis risus lectus odio enim ut tortor facilisi neque nibh.
          </p>

          {/* Buttons and Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-2">
            {/* Play Now Button */}
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 rounded-full transition text-lg">
              Play Now
            </button>

            {/* Platform Info */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <p className="text-gray-300">Available on:</p>
              <div className="flex gap-2 items-center">
                <FaWindows className="text-2xl" />
                <span className="text-3xl font-thin">iOS</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <p className="text-gray-400 mt-1">Buy now for $40 only</p>
        </div>
      </div>
    </section>
  );
}
