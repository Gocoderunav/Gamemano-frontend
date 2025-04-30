
// 'use client';

// import React from "react";
// import Image from "next/image";
// import { Card } from "./Card";
// import trendImg from "../icons/Most_Trending.png"; 
// import arrowImg from "../icons/side_arrow.png";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchProducts } from "@/store/productsSlice";

// const Cards = () => {
//   const { products, loading, error } = useAppSelector((state) => state.products);
//   const dispatch = useAppDispatch();

//   React.useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-white">Loading...</p>;
//   if (error) return <p className="text-white">Error: {error}</p>;

//   return (
//     <div className="px-4 py-8">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left: Heading Image */}
//         <div>
//           <Image
//             src={trendImg}
//             alt="Most Trending"
//             width={300}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         {/* Right: Go to Game Store */}
//         <div>
//           <a
//             href="#"
//             className="text-white text-sm sm:text-base font-semibold hover:underline flex items-center gap-2"
//           >
//             <span>Go to Game Store</span>
//             <span><img src={arrowImg.src} alt="arrow_img" /></span>
//           </a>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2px] gap-y-0">
//   {products.slice(0, 4).map((product) => (
//     <Card
//       key={product.id}
//       title={product.title}
//       price={product.price}
//     />
//   ))}
// </div>

//     </div>
//   );
// };

// export default Cards;


// 'use client';

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Card } from "./Card";
// import trendImg from "../icons/Most_Trending.png"; 
// import arrowImg from "../icons/side_arrow.png";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchProducts } from "@/store/productsSlice";

// const Cards = () => {
//   const router = useRouter();
//   const { products, loading, error } = useAppSelector((state) => state.products);
//   const dispatch = useAppDispatch();

//   React.useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-white">Loading...</p>;
//   if (error) return <p className="text-white">Error: {error}</p>;

//   return (
//     <div className="px-4 py-8">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left: Heading Image */}
//         <div>
//           <Image
//             src={trendImg}
//             alt="Most Trending"
//             width={300}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         {/* Right: Go to Game Store */}
//         <div>
//           <button
//             onClick={() => router.push('/products')}
//             className="text-white text-sm sm:text-base font-semibold hover:underline flex items-center gap-2"
//           >
//             <span>Go to Game Store</span>
//             <img src={arrowImg.src} alt="arrow_img" />
//           </button>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2px] gap-y-0">
//         {products.slice(0, 4).map((product) => (
//           <Card
//             key={product.id}
//             title={product.title}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;




// before polish

// 'use client';

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Card } from "./Card";
// import trendImg from "../icons/Most_Trending.png";
// import arrowImg from "../icons/side_arrow.png";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchProducts } from "@/store/productsSlice";

// const Cards = () => {
//   const router = useRouter();
//   const { products, loading, error } = useAppSelector((state) => state.products);
//   const dispatch = useAppDispatch();

//   React.useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-white">Loading...</p>;
//   if (error) return <p className="text-white">Error: {error}</p>;

//   return (
//     <div className="px-4 py-8">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left: Heading Image */}
//         <div>
//           <Image
//             src={trendImg}
//             alt="Most Trending"
//             width={300}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         {/* Right: Go to Game Store */}
//         <div>
//           <button
//             onClick={() => router.push("/products")}
//             className="text-white text-sm sm:text-base font-semibold hover:underline flex items-center gap-2"
//           >
//             <span>Go to Game Store</span>
//             <img src={arrowImg.src} alt="arrow_img" />
//           </button>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2px] gap-y-0">
//         {products.slice(0, 4).map((product) => (
//           <Card
//             key={product.id}
//             id={product.id} // ✅ Fix: pass ID for routing
//             title={product.title}
//             price={product.price}
//             rating={product.rating}
//             tags={product.tags}
//             releaseDate="10th August 2022" // optional: replace with real date if needed
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// After ploish 

// 'use client';

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Card } from "./Card";
// import trendImg from "../icons/Most_Trending.png";
// import arrowImg from "../icons/side_arrow.png";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchProducts } from "@/store/productsSlice";

// const Cards = () => {
//   const router = useRouter();
//   const { products, loading, error } = useAppSelector((state) => state.products);
//   const dispatch = useAppDispatch();

//   React.useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-white">Loading...</p>;
//   if (error) return <p className="text-white">Error: {error}</p>;

//   return (
//     <section className="w-full bg-gradient-to-b from-[#1c1915] to-black px-8 py-16">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Left: Heading Image */}
//         <div>
//           <Image
//             src={trendImg}
//             alt="Most Trending"
//             width={300}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         {/* Right: Go to Game Store */}
//         <div>
//           <button
//             onClick={() => router.push("/products")}
//             className="text-white text-sm sm:text-base font-semibold hover:underline flex items-center gap-2"
//           >
//             <span>Go to Game Store</span>
//             <img src={arrowImg.src} alt="arrow_img" />
//           </button>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.slice(0, 4).map((product) => (
//           <Card
//             key={product.id}
//             id={product.id}
//             title={product.title}
//             price={product.price}
//             rating={product.rating}
//             tags={product.tags}
//             releaseDate="10th August 2022"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Cards;



// After Polish---2




'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import trendImg from "../icons/Most_Trending.png";
import arrowImg from "../icons/side_arrow.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";

const Cards = () => {
  const router = useRouter();
  const { products, loading, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  return (
    <section className="w-full bg-gradient-to-b  bg-[#3D352A]/50 backdrop-blur-[40px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] px-8 py-16">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Left: Heading Image */}
        <div>
          <Image
            src={trendImg}
            alt="Most Trending"
            width={300}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Right: Go to Game Store */}
        <div>
          <button
            onClick={() => router.push("/products")}
            className="text-white text-sm sm:text-base font-semibold hover:underline flex items-center gap-2"
          >
            <span>Go to Product Store</span>
            <img src={arrowImg.src} alt="arrow_img" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            tags={product.tags}
            releaseDate="10th August 2022"
            thumbnail={product.thumbnail} // 🆕 pass thumbnail image
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;



// new polishing


