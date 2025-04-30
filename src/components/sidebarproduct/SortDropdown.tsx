// 'use client';

// import { useState } from 'react';

// const sortOptions = [
//   "Release date : Old to New",
//   "Release date : New to Old",
//   "Price : Low to High",
//   "Price : High to Low",
// ];

// const SortDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<string>("Release date : Old to New");

//   const handleSelect = (option: string) => {
//     setSelected(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Sort Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="border  rounded-full px-4 py-2 text-white flex items-center gap-2 text-sm hover:bg-white/5 transition-colors"
//       >
//         Sort by ▼
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#261E10] shadow-lg p-4 z-10 space-y-2">
//           {sortOptions.map((option) => (
//             <button
//               key={option}
//               onClick={() => handleSelect(option)}
//               className={`block w-full text-left px-4 py-2 rounded-full text-white transition ${
//                 selected === option
//                   ? "bg-[#e58e27] font-bold"
//                   : "hover:bg-white/10"
//               }`}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortDropdown;


'use client';
import { useState } from "react";
interface SortDropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

const sortOptions = [
  "Release date : Old to New",
  "Release date : New to Old",
  "Price : Low to High",
  "Price : High to Low",
];

const SortDropdown = ({ selected, setSelected }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);   // call parent's setSelected
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Sort Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border rounded-full px-4 py-2 text-white flex items-center gap-2 text-sm hover:bg-white/5 transition-colors"
      >
        Sort By ▼
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#261E10] shadow-lg p-4 z-10 space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 rounded-full text-white transition ${
                selected === option
                  ? "bg-[#e58e27] font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
