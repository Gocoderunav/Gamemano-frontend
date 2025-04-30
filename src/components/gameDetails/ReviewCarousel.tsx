'use client';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function ReviewCarousel({ reviews }: { reviews?: any[] }) {
  if (!reviews || !Array.isArray(reviews)) return null;

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-[#1d1a16] to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Reviews from other People</h2>
          <button className="text-sm font-semibold flex items-center gap-2 hover:underline">VIEW ALL →</button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar space-x-6 pr-6">
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-72 bg-orange-200 rounded-2xl p-6 shadow-md text-black">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center" />
                <div>
                  <h3 className="font-semibold text-lg">{review.reviewerName}</h3>
                  <div className="flex text-orange-400 mt-1">
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(review.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-400 my-4"></div>
              <p className="text-black text-base font-medium leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
