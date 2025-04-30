'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';

export default function GamesRecommended() {
  const recommendedGames = [
    {
      id: 1,
      title: 'Essence Mascara',
      price: 9.99,
      rating: 5,
      tags: ['beauty', 'mascara'],
      releaseDate: '23rd May 2024',
      thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
      stock: 5
    },
    {
      id: 2,
      title: 'Warlords',
      price: 40,
      rating: 4,
      tags: ['Strategy', 'PvP'],
      releaseDate: '15th May 2024',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
      stock: 8
    },
    {
      id: 3,
      title: 'Valorant',
      price: 0,
      rating: 4,
      tags: ['Shooter', 'Competitive'],
      releaseDate: '2nd April 2024',
      thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      stock: 10
    },
    {
      id: 4,
      title: 'Warlords',
      price: 40,
      rating: 4,
      tags: ['Strategy', 'PvP'],
      releaseDate: '15th May 2024',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
      stock: 8
    },
    {
      id: 5,
      title: 'Warlords',
      price: 40,
      rating: 4,
      tags: ['Strategy', 'PvP'],
      releaseDate: '15th May 2024',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
      stock: 8
    },
  ];

  return (
    <section className="w-full bg-[#1c1915] px-8 py-16 flex flex-col space-y-10">
      {/* Top Heading Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-semibold">Products recommended for you</h2>
        <div className="flex items-center space-x-2 cursor-pointer text-white text-sm hover:underline">
          <span>VIEW ALL</span>
          <span>→</span>
        </div>
      </div>

      {/* Carousel Row */}
      <motion.div
        className="flex gap-x-8 cursor-grab overflow-x-scroll no-scrollbar pb-4"
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {recommendedGames.map((game) => (
          <motion.div
            key={game.id}
            className="min-w-[270px] flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            style={{ opacity: 0.8 }}
          >
            <Card {...game} />
          
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

