// 'use client';

// import ProtectedRoute from '@/components/ProtectedRoute';
// import { useParams } from 'next/navigation';

// const ProductDetailPage = () => {
//   const { id } = useParams();

//   return (
//     <ProtectedRoute>
//       <div className="text-white p-8">
//         <h1 className="text-3xl font-bold mb-4">Product Detail Page</h1>
//         <p>Product ID: {id}</p>
//         {/* You can fetch full product data here using the ID */}
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default ProductDetailPage;





// 'use client';

// import GameHeroSection from '@/components/gameDetails/GameHeroSection';
// import ChampionSection from '@/components/gameDetails/ChampionSection';
// import ArenasCard from '@/components/gameDetails/ArenasCard';
// import ReviewsCarousel from '@/components/gameDetails/ReviewsCarousel';
// import StartLegendSection from '@/components/gameDetails/StartLegendSection';
// import GamesRecommended from '@/components/gameDetails/GamesRecommended';

// export default function GameDetailPage() {
//   return (
//     <div className="bg-[#0F0F0F] overflow-x-hidden">
//       <GameHeroSection />
//       <ChampionSection />
//       <ArenasCard />
//       <ReviewsCarousel />
//       <StartLegendSection />
//       <GamesRecommended />
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// import GameHeroSection from '@/components/gameDetails/GameHeroSection';
// import ChampionSection from '@/components/gameDetails/ChampionSection';
// import ArenasCard from '@/components/gameDetails/ArenasCard';
// import ReviewCarousel from '@/components/gameDetails/ReviewCarousel';
// import StartLegendSection from '@/components/gameDetails/StartLegendSection';
// import GamesRecommended from '@/components/gameDetails/GamesRecommended';

// export default function GameDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`https://dummyjson.com/products/${id}`)
//         .then((res) => res.json())
//         .then((data) => setProduct(data));
//     }
//   }, [id]);

//   if (!product) {
//     return <div className="text-white p-8">Loading...</div>;
//   }

//   return (
//     <div className="bg-[#0F0F0F] overflow-x-hidden">
//       <GameHeroSection product={product} />
//       <ChampionSection />
//       <ArenasCard />
//       <ReviewCarousel reviews={product.reviews} />
//       <StartLegendSection price={product.price} />
//       <GamesRecommended />
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import GameHeroSection from '@/components/gameDetails/GameHeroSection';
import ChampionSection from '@/components/gameDetails/ChampionSection';
import ArenasCard from '@/components/gameDetails/ArenasCard';
import ReviewCarousel from '@/components/gameDetails/ReviewCarousel';
import StartLegendSection from '@/components/gameDetails/StartLegendSection';
import GamesRecommended from '@/components/gameDetails/GamesRecommended';

export default function GameDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <div className="text-white p-8">Loading...</div>;
  }

  return (
    <div className="bg-[#0F0F0F] overflow-x-hidden">
      {/* Left border applied here */}
      <div className="border-l border-white/20 pl-6">
        <GameHeroSection product={product} />
        <ChampionSection />
        <ArenasCard />
        <ReviewCarousel reviews={product.reviews} />
        <StartLegendSection price={product.price} />
        <GamesRecommended />
      </div>
    </div>
  );
}
