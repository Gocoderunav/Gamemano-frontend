'use client';
import { FaWindows } from 'react-icons/fa6';
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import DaysGoneImage from '../icons/Days_Gone_front.png'
const LandingSection = () => {
  return (
    <section className="relative min-h-screen mr-20 pr-60  bg-black text-white flex flex-col items-center justify-center px-8">
      <div className="max-w-5xl w-full">

        {/* Days Gone Title */}
        <motion.h1
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-bold mb-4"
        >
          <Image 
  src={DaysGoneImage} 
  alt="Days Gone"  
  className="w-150 h-32 mb-4" 
/>
        </motion.h1>

        {/* Release Date */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-[#1E1E1E] w-150 text-right inline-block px-4 py-1 text-sm font-semibold mb-6"
        >
          RELEASE DATE : 30TH DECEMBER
        </motion.div>

        {/* Paragraph - Slide in from Left */}
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg mb-10 font-Prosto One"
        >
          Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
        </motion.p>

        {/* Buttons and Available Icons */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-6 mb-4"
        >
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full">
            Try For Free
          </button>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <p className="text-gray-300">Available on :</p>
            <div className="flex gap-2 items-center">
              <span className="text-3xl font-thin">iOS</span>
              <FaWindows className="text-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Buy Now */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white mb-6"
        >
          Buy now for $40 only
        </motion.div>

        {/* Friends Playing - always fully visible */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span>40 of your friends are playing</span>
        </div>
      </div>

      {/* BOTTOM CENTER 3 DOTS */}
      <div className="absolute bottom-10 flex items-center justify-center space-x-2">
        <span className="h-2 w-2 bg-orange-400 rounded-full"></span>
        <span className="h-2 w-2 bg-white/50 rounded-full"></span>
        <span className="h-2 w-2 bg-white/50 rounded-full"></span>
      </div>
    </section>
  );
};

export default LandingSection;
