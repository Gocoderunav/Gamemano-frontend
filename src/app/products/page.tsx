

// 'use client';

// import { useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from "@/components/sidebarproduct/SortDropdown"; 

// const ProductsPage = () => {
//   const [sortOrder, setSortOrder] = useState('Newest');
//   const searchQuery = "Valorant";
//   const resultCount = 10;

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
      
//       {/* Sidebar Filters */}
//       <aside className="w-64 mr-8">
//         <ProductFilters />
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">

//         {/* Top Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{resultCount} results found</p>
//           </div>

//           <div className="relative">
          
//               <SortDropdown />
            
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//   {Array(9).fill(0).map((_, index) => (
//     <Card key={index} />
//   ))}
// </div>


//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pb-8">
//           <p className="text-white text-lg font-medium mb-4 md:mb-0">
//             Checkout games similar to "{searchQuery}"
//           </p>
//           <button 
//             className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
//             aria-label="View all similar games"
//           >
//             VIEW ALL 
//             <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown'; 
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector(state => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');
//   const [searchQuery] = useState('Valorant');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       {/* Sidebar Filters */}
//       <aside className="w-64 mr-8">
//         <ProductFilters />
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts.length} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pb-8">
//           <p className="text-white text-lg font-medium mb-4 md:mb-0">
//             Checkout games similar to "{searchQuery}"
//           </p>
//           <button 
//             className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
//             aria-label="View all similar games"
//           >
//             VIEW ALL 
//             <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector(state => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');
//   const [searchQuery] = useState('Valorant');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       <aside className="w-64 mr-8">
//         <ProductFilters />
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts.length} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pb-8">
//           <p className="text-white text-lg font-medium mb-4 md:mb-0">
//             Checkout games similar to "{searchQuery}"
//           </p>
//           <button
//             className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
//             aria-label="View all similar games"
//           >
//             VIEW ALL
//             <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;






// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');
//   const [searchQuery] = useState('Valorant');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       <aside className="w-64 mr-8">
//         <ProductFilters />
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts?.length || 0} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts?.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


/// ProductsPage.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');
//   const [searchQuery] = useState('Valorant');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       <aside className="w-64 mr-8">
//         <ProductFilters />
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts?.length || 0} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts?.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';

// const ProductsPage = () => {
  
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');
//   const [searchQuery] = useState('Valorant'); // Hardcoded, can be made dynamic later

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       <aside className="w-64 mr-8">
//         <ProductFilters searchQuery ={searchQuery} />
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">Search results for "{searchQuery}"</h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts?.length || 0} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts?.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';
// import  Valorant  from '@/components/Valorant';
// import  EvolutionSection from '@/components/EvolutionSection';
// import  Warlords  from '@/components/Warlords';


// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="flex min-h-screen bg-[#0F0F0F] pt-16 px-8">
//       <aside className="w-64 mr-8">
//              <ProductFilters/>
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold mt-12 text-white">
//               Search results for "{selectedCategory ? capitalizeFirstLetter(selectedCategory) : "All Products"}"
//             </h1>
//             <p className="text-sm text-gray-400 mt-1">{filteredProducts?.length || 0} results found</p>
//           </div>

//           <div className="relative">
//             <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {filteredProducts?.map((product) => (
//             <Card key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//       <Valorant/>
//       <EvolutionSection/>
//       <Warlords/>
//     </div>
//   );
// };

// // Helper function to capitalize the first letter
// function capitalizeFirstLetter(word: string) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// export default ProductsPage;




// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';
// import Valorant from '@/components/Valorant';
// import EvolutionSection from '@/components/EvolutionSection';
// import Warlords from '@/components/Warlords';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="bg-[#0F0F0F] min-h-screen">
//       {/* Top Section: Filter + Cards */}
//       <div className="flex px-8 pt-20">
//         {/* Sidebar */}
//         <aside className="w-64 mr-8">
//           <ProductFilters />
//         </aside>

//         {/* Cards Section */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-2xl font-bold text-white">
//                 Search results for "{selectedCategory ? capitalizeFirstLetter(selectedCategory) : 'All Products'}"
//               </h1>
//               <p className="text-sm text-gray-400 mt-1">
//                 {filteredProducts?.length || 0} results found
//               </p>
//             </div>

//             <div className="relative">
//               <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {filteredProducts?.map((product) => (
//               <Card key={product.id} {...product} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Game Sections */}
//       <section className="mt-16">
//         <Valorant />
//         <EvolutionSection />
//         <Warlords />
//       </section>
//     </div>
//   );
// };

// // Helper function to capitalize the first letter
// function capitalizeFirstLetter(word: string) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// export default ProductsPage;


// 'use client';

// import { useEffect, useState } from 'react';
// import ProductFilters from '@/components/sidebarproduct/ProductFilters';
// import { Card } from '@/components/Card';
// import SortDropdown from '@/components/sidebarproduct/SortDropdown';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';
// import Valorant from '@/components/Valorant';
// import EvolutionSection from '@/components/EvolutionSection';
// import Warlords from '@/components/Warlords';

// const ProductsPage = () => {
//   const dispatch = useAppDispatch();
//   const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
//   const [sortOrder, setSortOrder] = useState('Release date : Old to New');

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(selectedCategory));
//   }, [dispatch, selectedCategory]);

//   useEffect(() => {
//     dispatch(sortByPrice(sortOrder));
//   }, [sortOrder, dispatch]);

//   return (
//     <div className="bg-[#0F0F0F] min-h-screen">
//       {/* Top Section: Filter + Cards */}
//       <div className="flex flex-col lg:flex-row px-4 md:px-8 pt-20 gap-8">
        
//         {/* Sidebar - Moves to top in small screens */}
//         <aside className="w-full lg:w-64">
//           <ProductFilters />
//         </aside>

//         {/* Cards Section */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-2xl font-bold text-white">
//                 Search results for "{selectedCategory ? capitalizeFirstLetter(selectedCategory) : 'All Products'}"
//               </h1>
//               <p className="text-sm text-gray-400 mt-1">
//                 {filteredProducts?.length || 0} results found
//               </p>
//             </div>

//             <div className="w-full md:w-auto">
//               <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
//             </div>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts?.map((product) => (
//               <Card key={product.id} {...product} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Game Sections */}
//       <section className="mt-16">
//         <Valorant />
//         <EvolutionSection />
//         <Warlords />
//       </section>
//     </div>
//   );
// };

// // Helper function to capitalize the first letter
// function capitalizeFirstLetter(word: string) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// export default ProductsPage;



'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';



const ProductFilters = dynamic(() => import('@/components/sidebarproduct/ProductFilters'), {
  ssr: false,
});

import { Card } from '@/components/Card';
import SortDropdown from '@/components/sidebarproduct/SortDropdown';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchFilteredProducts, sortByPrice } from '@/store/filterSlice';
import Valorant from '@/components/Valorant';
import EvolutionSection from '@/components/EvolutionSection';
import Warlords from '@/components/Warlords';

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, selectedCategory } = useAppSelector((state) => state.filters);
  const [sortOrder, setSortOrder] = useState('Release date : Old to New');

  useEffect(() => {
    dispatch(fetchFilteredProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    dispatch(sortByPrice(sortOrder));
  }, [sortOrder, dispatch]);

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      {/* Top Section: Filter + Cards */}
      <div className="flex flex-col lg:flex-row px-4 md:px-8 pt-20 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64">
          <ProductFilters />
        </aside>

        {/* Cards Section */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-2">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-white">
                Search results for "{selectedCategory ? capitalizeFirstLetter(selectedCategory) : 'All Products'}"
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                {filteredProducts?.length || 0} results found
              </p>
            </div>

            <div className="relative">
              <SortDropdown selected={sortOrder} setSelected={setSortOrder} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts?.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Game Sections */}
      <section className="mt-16">
        <Valorant />
        <EvolutionSection />
        <Warlords />
      </section>
    </div>
  );
};

// Helper function to capitalize the first letter
function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default ProductsPage;
