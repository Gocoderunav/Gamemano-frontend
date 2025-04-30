

'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchFilteredProducts,
  setSelectedCategory,
  setPriceRange,
  setSelectedRating,
  applyFilters,
} from '@/store/filterSlice';

function ProductFilters({ searchQuery }: { searchQuery: string }) {
  const dispatch = useAppDispatch();
  const { selectedCategory, priceRange, selectedRating } = useAppSelector((state) => state.filters);
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(fetchFilteredProducts(selectedCategory));
    dispatch(applyFilters());
  };

  return (
    <div className="p-10 rounded-[10px] bg-[rgba(48,31,8,0.5)] shadow-md max-w-3xs">
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg mb-2 text-white">Categories</h1>

        {/* All option */}
        <div className="p-2 flex items-center gap-2 text-white">
          <input
            type="radio"
            name="category"
            id="all-categories"
            checked={selectedCategory === null}
            onChange={() => dispatch(setSelectedCategory(null))}
          />
          <label htmlFor="all-categories" className="cursor-pointer">All</label>
        </div>

        {/* Category list */}
        {categories.map((cat) => (
          <div key={cat.slug} className="p-2 flex items-center gap-2 text-white">
            <input
              type="radio"
              name="category"
              id={cat.slug}
              checked={selectedCategory === cat.slug}
              onChange={() => dispatch(setSelectedCategory(cat.slug))}
            />
            <label htmlFor={cat.slug} className="cursor-pointer">{cat.name}</label>
          </div>
        ))}

        {/* Price filter */}
        <h1 className="text-lg mt-4 mb-2 text-white">Price</h1>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            placeholder="$Min"
            value={priceRange.min ?? ''}
            onChange={(e) =>
              dispatch(setPriceRange({
                ...priceRange,
                min: e.target.value ? parseFloat(e.target.value) : null,
              }))
            }
            className="bg-[#2b2417] text-white px-2 py-1 rounded w-20"
          />
          <span className="text-white">-</span>
          <input
            type="number"
            placeholder="$Max"
            value={priceRange.max ?? ''}
            onChange={(e) =>
              dispatch(setPriceRange({
                ...priceRange,
                max: e.target.value ? parseFloat(e.target.value) : null,
              }))
            }
            className="bg-[#2b2417] text-white px-2 py-1 rounded w-20"
          />
        </div>

        {/* Ratings */}
        <h1 className="text-lg mt-4 mb-2 text-white">Ratings</h1>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2 text-white">
            <input
              type="radio"
              id={`rating-${rating}`}
              checked={selectedRating === rating}
              onChange={() => dispatch(setSelectedRating(rating))}
              name="rating"
            />
            <label htmlFor={`rating-${rating}`}>
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} & Up
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="bg-[#e58e27] text-white rounded-4xl px-12 py-2 mt-8 cursor-pointer"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default ProductFilters;
