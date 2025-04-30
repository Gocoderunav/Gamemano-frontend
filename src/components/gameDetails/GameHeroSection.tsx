


// 'use client';

// import { motion } from 'framer-motion';
// import { FaWindows, FaApple, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import React from 'react';

// export default function GameDetailCard() {
//   return (
//     <section className="w-full min-h-screen bg-[#1c1915] flex flex-col items-center justify-center px-8 py-20 space-y-20">
      
//       {/* Double Border Wrapper */}
//       <div className="relative max-w-5xl w-full">

//         {/* Outer Brown Border (Shadow) */}
//         <div className="absolute top-4 right-4 w-full h-full border border-[#3e2d1e] rounded-md z-0" />

//         {/* Inner White Border Card */}
//         <div className="relative z-10 border border-white rounded-md bg-[#1c1915] p-6 h-[500px] flex flex-col justify-between">

//           {/* Top Section */}
//           <div className="flex flex-col space-y-4 mr-10">
            
//             {/* Release Date - Opacity with League Reveal */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 2 }}
//               className="bg-black bg-opacity-60 px-4 py-2 w-full max-w-[500px] text-white text-xs font-semibold tracking-widest"
//             >
//               RELEASE DATE : 30TH DECEMBER
//             </motion.div>

//             {/* Star Rating */}
//             <div className="flex items-center space-x-1">
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStarHalfAlt className="text-orange-400" />
//             </div>
//           </div>

//           {/* Center Section - League Text Reveal */}
//           <div className="flex-1 flex items-center justify-center overflow-hidden">
//             <motion.h1
//               initial={{ clipPath: 'inset(90% 0% 0% 0%)', opacity: 0.2 }}
//               animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
//               transition={{ duration: 2, ease: 'easeOut' }}
//               className="text-5xl md:text-7xl font-bold text-[#f5d6a2] leading-tight tracking-widest text-center"
//             >
//               LEAGUE OF <br /> LEGENDS
//             </motion.h1>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex justify-between items-end mt-6">

//             {/* Centered Button + Enrolled Text */}
//             <div className="flex flex-col items-center space-y-2 flex-1">
//               {/* Try For Free Button */}
//               <motion.button
//                 initial={{ opacity: 0.2 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 2 }}
//                 className="bg-orange-500 text-white text-sm px-8 ml-20 py-2 rounded-full"
//               >
//                 Try For Free
//               </motion.button>

//               {/* Enrolled text */}
//               <div className="flex items-center space-x-2 ml-5">
//                 <div className="w-2 h-2 rounded-full bg-green-400" />
//                 <p className="text-gray-300 text-sm">245k players already enrolled</p>
//               </div>
//             </div>

//             {/* OS Icons */}
//             <div className="flex items-center space-x-4 text-white">
//               <p className="text-xs">Available on:</p>
//               <FaWindows size={24} />
//               <FaApple size={24} />
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* NEW BOTTOM SECTION (Wild Rift Text + Choose Champion) */}
//      {/* NEW BOTTOM SECTION (Wild Rift Text + Choose Champion) */}
// <div className="flex flex-col items-start text-left max-w-4xl space-y-8 mt-20">

// {/* Wild Rift Paragraphs */}
// <p className="text-gray-300 text-sm leading-relaxed">
//   Wild Rift! Built from the ground up for mobile-first PvP, Wild Rift is a 5v5 multiplayer online battle arena (MOBA) game with exciting action where your skills, strategy, and combat senses are put to the test. Wild Rift is packed with content and fresh features for the ultimate PvP multiplayer experience.
// </p>

// <p className="text-gray-300 text-sm leading-relaxed">
//   Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay. Team up with friends, lock in your champion, and play to win!
// </p>

// {/* CHOOSE YOUR CHAMPION */}
// <div className="flex flex-col space-y-2">
//   <p className="text-[#d6b686] font-semibold tracking-wider text-sm">
//     CHOOSE YOUR
//   </p>
//   <h2 className="text-[#f5d6a2] text-5xl font-bold">
//     CHAMPION
//   </h2>
// </div>

// {/* Final small paragraph */}
// <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
//   Whether you like to dive straight into the fray, support your teammates, or something in between, there's a spot for you on the Rift.
// </p>

// </div>

//     </section>
//   );
// }





// 'use client';
// import { motion } from 'framer-motion';
// import { FaWindows, FaApple, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// export default function GameHeroSection({ product }: { product: any }) {
//   return (
//     <section className="w-full min-h-screen bg-[#1c1915] flex flex-col items-center justify-center px-8 py-20 space-y-20">
//       <div className="relative max-w-5xl w-full">
//         <div className="absolute top-4 right-4 w-full h-full border border-[#3e2d1e] rounded-md z-0" />
//         <div className="relative z-10 border border-white rounded-md bg-[#1c1915] p-6 h-[500px] flex flex-col justify-between">
//           <div className="flex flex-col space-y-4 mr-10">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 2 }}
//               className="bg-black bg-opacity-60 px-4 py-2 w-full max-w-[500px] text-white text-xs font-semibold tracking-widest"
//             >
//               RELEASE DATE : 30TH DECEMBER
//             </motion.div>

//             <div className="flex items-center space-x-1">
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStarHalfAlt className="text-orange-400" />
//             </div>
//           </div>

//           <div className="flex-1 flex items-center justify-center overflow-hidden">
//             <motion.h1
//               initial={{ clipPath: 'inset(90% 0% 0% 0%)', opacity: 0.2 }}
//               animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
//               transition={{ duration: 2, ease: 'easeOut' }}
//               className="text-5xl md:text-7xl font-bold text-[#f5d6a2] leading-tight tracking-widest text-center"
//             >
//               {product?.title ?? 'Loading...'}
//             </motion.h1>
//           </div>

//           <div className="flex justify-between items-end mt-6">
//             <div className="flex flex-col items-center space-y-2 flex-1">
//               <motion.button
//                 initial={{ opacity: 0.2 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 2 }}
//                 className="bg-orange-500 text-white text-sm px-8 ml-20 py-2 rounded-full"
//               >
//                 Try For Free
//               </motion.button>
//               <div className="flex items-center space-x-2 ml-5">
//                 <div className="w-2 h-2 rounded-full bg-green-400" />
//                 <p className="text-gray-300 text-right text-sm">245K players are already enrolled</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4 text-white">
//               <p className="text-xs">Available on:</p>
//               <FaWindows size={24} />
//               <FaApple size={24} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { FaWindows, FaApple, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// export default function GameHeroSection({ product }: { product: any }) {
//   return (
//     <section className="w-full min-h-screen bg-[#1c1915] flex flex-col items-center justify-center px-8 py-20 space-y-20">
      
//       {/* Main Bordered Card */}
//       <div className="relative max-w-5xl w-full">
//         {/* Outer border */}
//         <div className="absolute top-4 right-4 w-full h-full border border-[#3e2d1e] rounded-md z-0" />

//         {/* Inner card */}
//         <div className="relative z-10 border border-white rounded-md bg-[#1c1915] p-6 h-[500px] flex flex-col justify-between">

//           {/* Top Section */}
//           <div className="flex justify-between items-start">
//             {/* Release date & stars */}
//             <div className="space-y-4">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 2 }}
//                 className="bg-black bg-opacity-60 px-4 py-2 w-full max-w-[300px] text-white text-xs font-semibold tracking-widest"
//               >
//                 RELEASE DATE : 30TH DECEMBER
//               </motion.div>

//               <div className="flex items-center space-x-1">
//                 <FaStar className="text-orange-400" />
//                 <FaStar className="text-orange-400" />
//                 <FaStar className="text-orange-400" />
//                 <FaStar className="text-orange-400" />
//                 <FaStarHalfAlt className="text-orange-400" />
//               </div>
//             </div>

//             {/* Product image */}
//             {product?.thumbnail && (
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-32 h-32 object-contain rounded-md"
//               />
//             )}
//           </div>

//           {/* Title */}
//           <div className="flex-1 flex items-center justify-center overflow-hidden">
//             <motion.h1
//               initial={{ clipPath: 'inset(90% 0% 0% 0%)', opacity: 0.2 }}
//               animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
//               transition={{ duration: 2, ease: 'easeOut' }}
//               className="text-5xl md:text-7xl font-bold text-[#f5d6a2] leading-tight tracking-widest text-center"
//             >
//               {product?.title ?? 'Loading...'}
//             </motion.h1>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex justify-between items-end mt-6">
//             {/* Left: CTA + count */}
//             <div className="flex flex-col items-start space-y-2">
//               <motion.button
//                 initial={{ opacity: 0.2 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 2 }}
//                 className="bg-orange-500 text-white text-sm px-8 py-2 rounded-full"
//               >
//                 Try For Free
//               </motion.button>
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 rounded-full bg-green-400" />
//                 <p className="text-gray-300 text-sm">245k players already enrolled</p>
//               </div>
//             </div>

//             {/* Platforms */}
//             <div className="flex items-center space-x-4 text-white">
//               <p className="text-xs">Available on:</p>
//               <FaWindows size={24} />
//               <FaApple size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Description Section */}
//       <div className="max-w-4xl text-left text-gray-300 space-y-6 text-sm leading-relaxed px-4">
//         <p>{product?.description}</p>
//         <p>
//           Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay.
//           Team up with friends, lock in your champion, and play to win!
//         </p>

//         {/* Choose Your Champion Section */}
//         <div className="space-y-2 mt-8">
//           <p className="text-[#d6b686] font-semibold tracking-wider text-sm">
//             CHOOSE YOUR
//           </p>
//           <h2 className="text-[#f5d6a2] text-5xl font-bold">CHAMPION</h2>
//         </div>

//         <p className="text-gray-300 text-sm max-w-2xl mt-2">
//           Whether you like to dive straight into the fray, support your teammates, or something in between,
//           there’s a spot for you on the Rift.
//         </p>
//       </div>
//     </section>
//   );
// }




// 'use client';

// import { motion } from 'framer-motion';
// import { FaWindows, FaApple, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// export default function GameHeroSection({ product }: { product: any }) {
//   return (
//     <section className="w-full min-h-screen bg-[#1c1915] flex flex-col items-center justify-center px-8 py-20 space-y-20">
      
//       {/* Main Bordered Card */}
//       <div className="relative max-w-5xl w-full">
//         {/* Outer border */}
//         <div className="absolute top-4 right-4 w-full h-full border border-[#3e2d1e] rounded-md z-0" />

//         {/* Inner card */}
//         <div className="relative z-10 border border-white rounded-md bg-[#1c1915] p-6 h-[500px] flex flex-col justify-between">

//           {/* Top Section - Release Date + Stars */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 2 }}
//               className="bg-black bg-opacity-60 px-4 py-2 w-[300px] text-white text-xs font-semibold tracking-widest"
//             >
//               RELEASE DATE : 30TH DECEMBER
//             </motion.div>

//             {/* Rating */}
//             <div className="flex items-center space-x-1">
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStar className="text-orange-400" />
//               <FaStarHalfAlt className="text-orange-400" />
//             </div>
//           </div>

//           {/* Title in Center */}
//           <div className="flex-1 flex items-center justify-center overflow-hidden">
//             <motion.h1
//               initial={{ clipPath: 'inset(90% 0% 0% 0%)', opacity: 0.2 }}
//               animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
//               transition={{ duration: 2, ease: 'easeOut' }}
//               className="text-5xl md:text-7xl font-bold text-[#f5d6a2] leading-tight tracking-widest text-center"
//             >
//               {product?.title ?? 'Loading...'}
//             </motion.h1>
//           </div>

//           {/* Center Try for Free Button + Player Count */}
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <motion.button
//               initial={{ opacity: 0.2 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 2 }}
//               className="bg-orange-500 text-white text-sm px-8 py-2 rounded-full"
//             >
//               Try For Free
//             </motion.button>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 rounded-full bg-green-400" />
//               <p className="font-prosto text-gray-300 text-sm">245k players already enrolled</p>
//             </div>
//           </div>

//           {/* Platforms at Bottom Right */}
//           <div className="absolute bottom-6 right-6 flex items-center space-x-4 text-white">
//             <p className="text-xs">Available on:</p>
//             <FaWindows size={24} />
//             <FaApple size={24} />
//           </div>
//         </div>
//       </div>

//       {/* Description & Champion Callout */}
//       <div className="max-w-4xl text-left text-gray-300 pr-40 mr-30 space-y-6 text-sm leading-relaxed px-4">
//         <p>{product?.description}</p>

//         <p className="font-prosto font-xl">
//           Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay.
//           Team up with friends, lock in your champion, and play to win!
//         </p>

//         <div className="space-y-2 mt-8">
//           <p className="text-[#d6b686] font-semibold tracking-wider text-sm">
//             CHOOSE YOUR
//           </p>
//           <h2 className="text-[#f5d6a2] text-5xl font-bold">CHAMPION</h2>
//         </div>

//         <p className="text-gray-300 text-sm max-w-2xl mt-2">
//           Whether you like to dive straight into the fray, support your teammates, or something in between,
//           there’s a spot for you on the Rift.
//         </p>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { FaWindows, FaApple, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function GameHeroSection({ product }: { product: any }) {
  return (
    <section className="w-full min-h-screen bg-[#1c1915] flex flex-col items-center justify-center px-8 py-20 space-y-20">
      
      {/* Main Bordered Card */}
      <div className="relative max-w-5xl w-full">
        <div className="absolute top-4 right-4 w-full h-full border border-[#3e2d1e] rounded-md z-0" />

        <div className="relative z-10 border border-white rounded-md bg-[#1c1915] p-6 h-[500px] flex flex-col justify-between">

          {/* Top - Release Date + Rating */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="bg-black bg-opacity-60 px-6 py-2 w-[360px] text-white text-xs font-semibold tracking-widest"
            >
              RELEASE DATE : 30TH DECEMBER
            </motion.div>

            <div className="flex items-center space-x-1">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStarHalfAlt className="text-orange-400" />
            </div>
          </div>

          {/* Title */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <motion.h1
              initial={{ clipPath: 'inset(90% 0% 0% 0%)', opacity: 0.2 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-bold text-[#f5d6a2] leading-tight tracking-widest text-center"
            >
              {product?.title ?? 'Loading...'}
            </motion.h1>
          </div>

          {/* Try for Free + Player Count */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.button
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="bg-orange-500 text-white text-sm px-8 py-2 rounded-full"
            >
              Try For Free
            </motion.button>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="font-prosto text-gray-300 text-sm">245k players already enrolled</p>
            </div>
          </div>

          {/* Platforms */}
          <div className="absolute bottom-6 right-6 flex items-center space-x-4 text-white">
            <p className="text-xs">Available on:</p>
            <FaWindows size={24} />
            <FaApple size={24} />
          </div>
        </div>
      </div>

      {/* Description + Callout */}
      <div className="max-w-4xl text-left text-gray-300 space-y-6 text-lg font-prosto leading-relaxed px-4 mr-50">
        <p>{product?.description}</p>

        <p>
          Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay.
          Team up with friends, lock in your champion, and play to win!
        </p>

        <div className="space-y-2 mt-8">
          <p className="text-[#d6b686] font-semibold tracking-wider text-sm">
            CHOOSE YOUR
          </p>
          <h2 className="text-[#f5d6a2] text-5xl font-bold">CHAMPION</h2>
        </div>

        <p>
          Whether you like to dive straight into the fray, support your teammates, or something in between,
          there’s a spot for you on the Rift.
        </p>
      </div>
    </section>
  );
}
