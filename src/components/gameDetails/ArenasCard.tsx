
'use client';

import React from 'react';

export default function ArenasCard() {
  return (
    <section className="w-full min-h-screen bg-[#2B241766] flex items-center justify-center px-8 py-20 relative">
      
      {/* First Div - Big Circles and Paragraph */}
      <div className="relative w-full h-[500px] flex flex-col items-center justify-end bg-transparent">
        
        {/* Outer Dotted Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="relative w-[380px] h-[380px] border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
            
            {/* Inner Black Solid Circle */}
            <div className="w-[350px] h-[350px] rounded-full bg-black" />
          
          </div>
        </div>

        {/* Paragraph at bottom */}
        <p className="text-gray-400 text-sm text-center max-w-lg mb-4">
          Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.
        </p>
      </div>

      {/* Second Div - Overlapping Text + Arenas */}
      <div className="absolute top-[42%] w-full h-[300px] border border-gray-600 rounded-md flex items-center justify-between px-10 py-8 ml-50% mr-50% bg-[#2B241766]">

        {/* Left Text */}
        <div className="flex flex-col justify-start space-y-4 text-right">
          <p className="text-[#d6b686] font-semibold tracking-wider text-sm text-right">
            CHOOSE FROM MULTIPLE
          </p>
          <h2 className="text-[#f5d6a2] text-5xl font-bold">ARENAS</h2>
        </div>

        {/* Right Arenas */}
        <div className="flex flex-col items-center space-y-8">
          {/* Arena 1 */}
          <div className="flex items-center space-x-4">
            <p className="text-white text-sm">Arena 1</p>
            <div className="w-16 h-16 border border-gray-400" />
          </div>

          {/* Arena 2 (shifted slightly left) */}
          <div className="flex items-center space-x-4 mr-14">
            <p className="text-white text-sm">Arena 2</p>
            <div className="w-16 h-16 border border-gray-400" />
          </div>

          {/* Arena 3 (same as Arena 1) */}
          <div className="flex items-center space-x-4">
            <p className="text-white text-sm">Arena 3</p>
            <div className="w-16 h-16 border border-gray-400" />
          </div>
        </div>

      </div>

    </section>
  );
}
