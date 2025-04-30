'use client';

import { useState } from 'react';

const SortMenu = () => {
  const [selected, setSelected] = useState('Release date : New to Old');

  const options = [
    'Release date : Old to New',
    'Release date : New to Old',
    'Price : Low to High',
    'Price : High to Low',
  ];

  return (
    <div className="bg-[#2b241a] p-6 rounded-2xl w-80 space-y-4">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => setSelected(option)}
          className={`text-white text-lg text-center cursor-pointer py-2 px-4 rounded-full transition-all
            ${selected === option ? 'bg-orange-400 font-semibold' : ''}
          `}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default SortMenu;
