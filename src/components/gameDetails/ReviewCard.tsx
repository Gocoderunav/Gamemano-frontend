// 'use client';
// import React from 'react';
// import { FaStar, FaRegStar } from 'react-icons/fa'; // For filled and empty stars

// export default function ReviewCard() {
//   return (
//     <div className="max-w-md bg-orange-200 rounded-2xl p-6 shadow-md text-black">
      
//       {/* Top Section - Avatar and Name */}
//       <div className="flex items-center gap-4">
//         {/* Avatar Circle */}
//         <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center">
//           {/* You can put image inside if you want */}
//         </div>

//         {/* Username */}
//         <div>
//           <h3 className="font-semibold text-lg">Gamer1568</h3>
          
//           {/* Stars */}
//           <div className="flex text-orange-400 mt-1">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaRegStar />
//           </div>
//         </div>
//       </div>

//       {/* Divider Line */}
//       <div className="border-t border-gray-400 my-4"></div>

//       {/* Review Text */}
//       <p className="text-black text-base font-medium leading-relaxed">
//         Suspendisse tristique cursus viverra eu ac ac arcu integer. Et dolor aliquam nisi lacinia commodo facilisis tortor lobortis malesuada. Id nibh nisl convallis odio dui.
//       </p>

//     </div>
//   );
// }


'use client';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface ReviewCardProps {
  reviewerName: string;
  rating: number;
  comment: string;
}

export default function ReviewCard({ reviewerName, rating, comment }: ReviewCardProps) {
  return (
    <div className="max-w-md bg-orange-200 rounded-2xl p-6 shadow-md text-black">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center">
          {/* Avatar Placeholder */}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{reviewerName}</h3>
          <div className="flex text-orange-400 mt-1">
            {[...Array(5)].map((_, i) =>
              i < Math.floor(rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 my-4"></div>
      <p className="text-black text-base font-medium leading-relaxed">
        {comment}
      </p>
    </div>
  );
}
