// import React from 'react'

// export const Card = (props) => {
//   return (
//     <div className="max-w-sm  w-80 bg-[#FEF3BC] h-98 rounded-2xl shadow-md p-6 flex flex-col justify-between">
     
//       {/* Status badge */}
//       <div className="flex justify-start">
//         <div className="flex items-center gap-2 bg-black text-white text-xs ml-0 px-3 py-1 m rounded-full">
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//           1200 Online
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow flex flex-col mt-44 justify-end ">
//         {/* Game title */}
//         <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
//           World of Warcraft
//         </h2>

//         {/* Tags */}
//         <div className="text-red-500 font-semibold flex flex-wrap gap-2 mb-1">
//           <span>10k+ Players</span> 
//           <span>•</span>
//           <span>Action</span> 
//           <span>•</span>
//           <span>Adventure</span>
//         </div>

//         {/* Release date */}
//         <p className="text-black text-sm mb-4">Released 10th August 2022</p>

//         {/* Price and button */}
//         <div className="flex items-center justify-between mt-auto">
//           <span className="text-2xl font-bold text-black">$48</span>
//           <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 w-62 rounded-full">
//             Buy Now
//           </button>
//         </div>
//       </div>

//     </div>
//   )
// }









// 'use client';

// import React from 'react';

// type CardProps = {
//   title: string;
//   price: number;
//   thumbnail: string;
// };

// export const Card = ({ title, price, thumbnail }: CardProps) => {
//   return (
//     <div className="max-w-sm w-80 bg-[#FEF3BC] h-98 rounded-2xl shadow-md p-6 flex flex-col justify-between">
//       {/* Status badge */}
//       <div className="flex justify-start">
//         <div className="flex items-center gap-2 bg-black text-white text-xs ml-0 px-3 py-1 rounded-full">
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//           1200 Online
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow flex flex-col mt-44 justify-end">
//         {/* Game title */}
//         <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
//           {title}
//         </h2>

//         {/* Tags (hardcoded) */}
//         <div className="text-red-500 font-semibold flex flex-wrap gap-2 mb-1">
//           <span>10k+ Players</span>
//           <span>•</span>
//           <span>Action</span>
//           <span>•</span>
//           <span>Adventure</span>
//         </div>

//         {/* Release date (hardcoded) */}
//         <p className="text-black text-sm mb-4">Released 10th August 2022</p>

//         {/* Price and Buy Button */}
//         <div className="flex flex-col items-center mt-auto gap-2">
//   <span className="text-2xl font-bold text-black">${price}</span>
//   <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 w-full max-w-[200px] rounded-full">
//     Buy Now
//   </button>
// </div>

//       </div>
//     </div>
//   );
// };



// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// interface CardProps {
//   id: number;
//   title?: string;
//   price?: number;
//   rating?: number;
//   tags?: string[];
//   releaseDate?: string;
// }

// export const Card = ({
//   id,
//   title = "World of Warcraft",
//   price = 48,
//   rating = 3,
//   tags = ["10k+ Players", "Action", "Adventure"],
//   releaseDate = "10th August 2022"
// }: CardProps) => {
//   const router = useRouter();

//   const handleBuyNow = () => {
//     const isLoggedIn = localStorage.getItem('loggedIn');
//     const isUserSignedUp = localStorage.getItem('user');
  
//     localStorage.setItem('redirectAfterLogin', `/products/${id}`);
  
//     if (isLoggedIn === 'true') {
//       router.push(`/products/${id}`);
//     } else {
//       router.push(isUserSignedUp ? '/login' : '/signup');
//     }
//   };
  

//   return (
//     <div className="max-w-sm w-72 gap-10 bg-[#FEF3BC] rounded-2xl shadow-md p-4 flex flex-col justify-between space-y-4">
      
//       {/* Status Badge */}
//       <div className="flex justify-start">
//         <div className="flex items-center gap-2 bg-black text-white text-xs px-3 py-1 rounded-full">
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//           1200 Online
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col pt-20 flex-grow justify-end">
//         {/* Title */}
//         <h2 className="text-xl font-bold font-Aoboshi text-gray-900 mb-1">
//           {title}
//         </h2>

//         {/* Star Rating */}
//         <div className="flex mb-1">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <span key={i} className={i <= rating ? "text-orange-400" : "text-gray-400"}>★</span>
//           ))}
//         </div>

//         {/* Tags */}
//         <div className="text-red-500 font-semibold flex flex-wrap gap-1 mb-1 text-sm">
//           {tags.map((tag, index) => (
//             <React.Fragment key={index}>
//               {index > 0 && <span>•</span>}
//               <span>{tag}</span>
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Release Date */}
//         <p className="text-black text-xs mb-4">Released {releaseDate}</p>

//         {/* Price and Button */}
//         <div className="flex items-center justify-between mt-auto">
//           <span className="text-lg font-bold text-black">${price}</span>
//           <button
//             onClick={handleBuyNow}
//             className="bg-[#F48A19] text-center w-[190px] hover:bg-[#e57a0f] text-white text-sm font-semibold py-2 px-6 rounded-full transition"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: number;
  title?: string;
  price?: number;
  rating?: number;
  tags?: string[];
  releaseDate?: string;
  thumbnail?: string;
  stock?: number; // 🆕 added stock
}

export const Card = ({
  id,
  title = 'World of Warcraft',
  price = 48,
  rating = 3,
  tags = ['10k+ Players', 'Action', 'Adventure'],
  releaseDate = '10th August 2022',
  thumbnail,
  stock = 0
}: CardProps) => {
  const router = useRouter();

  const handleBuyNow = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const isUserSignedUp = localStorage.getItem('user');
    localStorage.setItem('redirectAfterLogin', `/products/${id}`);

    if (isLoggedIn === 'true') {
      router.push(`/products/${id}`);
    } else {
      router.push(isUserSignedUp ? '/login' : '/signup');
    }
  };

  return (
    <div className="max-w-sm w-72 bg-[#FEF3BC] rounded-2xl shadow-md p-4 flex flex-col justify-between relative">

      {/* Stock Badge */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-2 bg-black text-white text-xs px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          {stock} in stock
        </div>
      </div>

      {/* Product Thumbnail */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-contain rounded-md mb-4 mt-8"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-bold font-Aoboshi text-gray-900 mb-1">
        {title}
      </h2>

      {/* Star Rating */}
      <div className="flex mb-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={i <= rating ? 'text-orange-400' : 'text-gray-400'}>★</span>
        ))}
      </div>

      {/* Tags */}
      <div className="text-red-500 font-semibold flex flex-wrap gap-1 mb-1 text-sm">
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span>•</span>}
            <span>{tag}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Release Date */}
      <p className="text-black text-xs mb-4">Released {releaseDate}</p>

      {/* Price and Button */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-black">${price}</span>
        <button
          onClick={handleBuyNow}
          className="bg-[#F48A19] text-center w-[190px] hover:bg-[#e57a0f] text-white text-sm font-semibold py-2 px-6 rounded-full transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};


