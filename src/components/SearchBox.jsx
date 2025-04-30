'use client';

import React from 'react';

const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-black text-white border rounded-full pl-10 pr-4 py-2 placeholder-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
