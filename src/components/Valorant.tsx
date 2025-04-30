// import React from 'react';
// import { FaWindows, FaApple } from 'react-icons/fa';

// const EvolutionSection = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-white px-4 py-8">
      
//       {/* Top-right corner - Friends playing info */}
//       <div className="absolute top-6 right-6 flex flex-col items-end space-y-2">
//         <div className="flex items-center text-white text-sm">
//           <span className="bg-green-400 w-2 h-2 rounded-full mr-2"></span>
//           40 of your friends are playing
//         </div>
//         <div className="flex items-center text-orange-400 text-lg">
//           <span>★</span>
//           <span>★</span>
//           <span>★</span>
//           <span>☆</span>
//           <span>☆</span>
//         </div>
//       </div>

//       {/* Center Content */}
//       <div className="flex flex-col items-center max-w-2xl text-center mt-10">
        
//         {/* Title */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">Evolution</h1>

//         {/* Release Date */}
//         <div className="bg-black bg-opacity-70 px-6 py-2 mb-6 rounded-md">
//           <p className="text-xs font-semibold tracking-widest">
//             RELEASE DATE : 30TH DECEMBER
//           </p>
//         </div>

//         {/* Description */}
//         <p className="text-gray-300 leading-relaxed ml-45 pr-1mb-8">
//           Players assume the role of Deacon St. John, a former bounty hunter struggling to survive
//           in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players
//           are surrounded by death and danger on all sides, the world that they get to explore feels
//           as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
//         </p>

//         {/* Button + Platform */}
//         <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
//           {/* Play Now Button */}
//           <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full transition">
//             Play Now
//           </button>

//           {/* Platform Info */}
//           <div className="flex items-center gap-2">
//             <p className="text-gray-300">Available on :</p>
//             <FaWindows className="text-3xl" />
//             <FaApple className="text-3xl" />
//           </div>
//         </div>

//         {/* Price */}
//         <p className="text-gray-400 mt-2">Buy now for $40 only</p>
//       </div>
//     </div>
//   );
// };

// export default EvolutionSection;



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