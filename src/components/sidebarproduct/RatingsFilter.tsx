'use client';

type RatingsFilterProps = {
  ratings: number[];
};

function RatingsFilter({ ratings }: RatingsFilterProps) {
  return (
    <div className="flex flex-col gap-2">
      {ratings.map((stars) => (
        <div key={stars} className="flex items-center gap-2">
          {/* Stars */}
          <div className="text-yellow-400">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
          {/* Text */}
          <span className="text-white">& Up</span>
        </div>
      ))}
    </div>
  );
}

export default RatingsFilter;
