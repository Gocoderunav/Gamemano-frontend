// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';

// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';


// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };
//   return (
//     <nav className="bg-black text-white shadow-md p-4 flex items-center justify-between">
      
//       {/* Left side - Pages */}
//       <div className="flex items-center space-x-6">
//         <div className="cursor-pointer font-semibold">Home</div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">
//         <button onClick={()=>handleNavigation('/products')}>Game Store</button>
//         </div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">Leaderboard</div>
//       </div>

//       {/* Right side - Search and Icons */}
//       <div className="flex items-center space-x-6">
        
//         {/* Search Box */}
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="What are you looking for?" 
//             className="bg-black text-white border border-white/20 rounded-full w-120 pl-10 pr-4 py-2 placeholder-white focus:outline-none"
//             suppressHydrationWarning
//           />
        
//           <img 
//             src={searchIcon.src} 
//             alt="Search" 
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>

//         {/* Divider after search */}
//         <div className="w-px h-6 bg-white" />

//         {/* Notification Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Notifications">
//           <img src={notiImg.src} alt="Notification" className="w-5 h-5" />
//         </div>

//         {/* Divider */}
//         <div className="w-px h-6 bg-white" />

//         {/* Cart Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Cart">
//           <img src={cartImg.src} alt="Cart" className="w-5 h-5" />
//         </div>

//         {/* Divider */}
//         <div className="w-px h-6 bg-white" />

//         {/* Profile Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Profile">
//           <img src={Profile.src} alt="Profile" className="w-5 h-5" />
//         </div>

//       </div>

//     </nav>
//   );
// }








// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';

// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';
// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     // <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md p-4 pl-28 flex items-center justify-between">
//     <nav className="bg-black text-white shadow-md  p-4 flex items-center justify-between relative z-40">

//       {/* 👆 Notice pl-28 to create space for Sidebar, fixed navbar */}


//       <div className="flex items-center space-x-6">
     
//         <div className="cursor-pointer font-semibold">Home</div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">
//           <button onClick={() => handleNavigation('/products')}>Game Store</button>
//         </div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">Leaderboard</div>
//       </div>

//       {/* Right side - Search and Icons */}
//       <div className="flex items-center space-x-6">
//         {/* Search Box */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-white/20 rounded-full w-80 pl-10 pr-4 py-2 placeholder-white focus:outline-none"
//             suppressHydrationWarning
//           />
//           <img
//             src={searchIcon.src}
//             alt="Search"
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>

//         {/* Divider after search */}
//         <div className="w-px h-6 bg-white" />

//         {/* Notification Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Notifications">
//           <img src={notiImg.src} alt="Notification" className="w-5 h-5" />
//         </div>

//         {/* Divider */}
//         <div className="w-px h-6 bg-white" />

//         {/* Cart Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Cart">
//           <img src={cartImg.src} alt="Cart" className="w-5 h-5" />
//         </div>

//         {/* Divider */}
//         <div className="w-px h-6 bg-white" />

//         {/* Profile Icon */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Profile">
//           <img src={Profile.src} alt="Profile" className="w-5 h-5" />
//         </div>
//       </div>
//     </nav>
//   );
// }




// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image'; // 👈 (You missed importing Image properly!)
// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';

// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <nav className="bg-black text-white shadow-md p-4 pl-32 flex items-center justify-between relative z-40">
//       {/* 👆 pl-32 means push everything right to leave space for sidebar */}

//       {/* Left side - Logo and Links */}
//       <div className="flex items-center space-x-6">
//         <div><Image src={GQ} alt="GQ-Img" width={60} height={40} style={{ paddingRight: 20 }} /></div>

//         <div className="cursor-pointer font-semibold">Home</div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">
//           <button onClick={() => handleNavigation('/products')}>Game Store</button>
//         </div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">Leaderboard</div>
//       </div>

//       {/* Right side - Search and Icons */}
//       <div className="flex items-center space-x-6">
//         {/* Search Box */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-white/20 rounded-full w-80 pl-10 pr-4 py-2 placeholder-white focus:outline-none"
//             suppressHydrationWarning
//           />
//           <img
//             src={searchIcon.src}
//             alt="Search"
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>

//         {/* Notification */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Notifications">
//           <img src={notiImg.src} alt="Notification" className="w-5 h-5" />
//         </div>

//         {/* Cart */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Cart">
//           <img src={cartImg.src} alt="Cart" className="w-5 h-5" />
//         </div>

//         {/* Profile */}
//         <div className="flex items-center justify-center border rounded-full p-2 cursor-pointer" aria-label="Profile">
//           <img src={Profile.src} alt="Profile" className="w-5 h-5" />
//         </div>
//       </div>
//     </nav>
//   );
// }


// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image'; // Important to import next/image

// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';

// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <nav className="top-0 left-0 w-full  bg-black text-white shadow-md p-4 flex items-center justify-between">
//       {/* 👆 FIXED navbar, full width, and z-50 to be above sidebar */}

//       {/* Left side - Logo and Pages */}
//       <div className="flex items-center space-x-6 ml-24"> 
//         {/* 👆 add ml-24 for space because Sidebar width is 96px = 24 Tailwind units */}
        
//         <div><Image src={GQ} alt="GQ Logo" width={40} height={40} /></div>
//         <div className="cursor-pointer font-semibold">Home</div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">
//           <button onClick={() => handleNavigation('/products')}>Game Store</button>
//         </div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">Leaderboard</div>
//       </div>

//       {/* Right side - Search and Icons */}
//       <div className="flex items-center space-x-6">
//         {/* Search Box */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-white/20 rounded-full w-80 pl-10 pr-4 py-2 placeholder-white focus:outline-none"
//             suppressHydrationWarning
//           />
//           <img
//             src={searchIcon.src}
//             alt="Search"
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>

//         {/* Notification, Cart, Profile */}
//         <div className="flex items-center space-x-4">
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={notiImg.src} alt="Notification" className="w-5 h-5" />
//           </div>
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={cartImg.src} alt="Cart" className="w-5 h-5" />
//           </div>
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={Profile.src} alt="Profile" className="w-5 h-5" />
//           </div>
//         </div>
//       </div>

//     </nav>
//   );
// };


// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';

// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-20 bg-black text-white shadow-md p-4 flex items-center justify-between">
//    <Image src={GQ} alt="GQ Logo" width={40} height={40} style={{marginLeft:20}}/>
//       {/* Left Side */}
//       <div className="flex items-center space-x-6 ml-2"> {/* 👈 ml-28 to offset Sidebar */}
        
//         <div className="cursor-pointer font-semibold">Home</div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">
//           <button onClick={() => handleNavigation('/products')}>Game Store</button>
//         </div>
//         <div className="w-px h-6 bg-white" />
//         <div className="cursor-pointer font-semibold">Leaderboard</div>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center space-x-6 mr-8">
//         {/* Search */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-white/20 rounded-full w-80 pl-10 pr-4 py-2 placeholder-white focus:outline-none"
//             suppressHydrationWarning
//           />
//           <img
//             src={searchIcon.src}
//             alt="Search"
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={notiImg.src} alt="Notification" className="w-5 h-5" />
//           </div>
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={cartImg.src} alt="Cart" className="w-5 h-5" />
//           </div>
//           <div className="border rounded-full p-2 cursor-pointer">
//             <img src={Profile.src} alt="Profile" className="w-5 h-5" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };



// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';

// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path) => {
//     router.push(path);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-20 bg-black text-white shadow-md flex items-center justify-between px-6 py-4">
//       {/* Logo - positioned at the far left */}
//       <div className="flex items-center">
//         <Image 
//           src={GQ} 
//           alt="GQ Logo" 
//           width={52} 
//           height={26} 
//         />
//       </div>

//       {/* Navigation Links - centered */}
//       <div className="flex items-center space-x-8 ml-12">
//         <button 
//           onClick={() => handleNavigation('/')}
//           className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm"
//         >
//           Home
//         </button>
//         <div className="w-px h-5 bg-gray-700"></div>
//         <button 
//           onClick={() => handleNavigation('/products')}
//           className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm"
//         >
//           Game Store
//         </button>
//         <div className="w-px h-5 bg-gray-700"></div>
//         <button 
//           onClick={() => handleNavigation('/leaderboard')}
//           className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm"
//         >
//           Leaderboard
//         </button>
//       </div>

//       {/* RIGHT SIDE - search and icons */}
//       <div className="flex items-center space-x-4">
//         {/* Search Bar */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-gray-800 rounded-full w-64 pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-600"
//             suppressHydrationWarning
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//             <Image 
//               src={searchIcon} 
//               alt="Search" 
//               width={16} 
//               height={16} 
//             />
//           </div>
//         </div>

//         {/* Icons */}
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={notiImg} alt="Notification" width={20} height={20} />
//         </button>
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={cartImg} alt="Cart" width={20} height={20} />
//         </button>
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={Profile} alt="Profile" width={20} height={20} />
//         </button>
//       </div>
//     </nav>
//   );
// };




// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// import notiImg from '../icons/Notification.png';
// import cartImg from '../icons/Vector.png';
// import Profile from '../icons/Profile.png';
// import searchIcon from '../icons/Search.png';
// import GQ from '../icons/GQ.png';

// export const Navbar = () => {
//   const router = useRouter();
//   const handleNavigation = (path) => {
//     router.push(path);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-20 bg-black text-white shadow-md flex items-center px-10 py-4">
//       {/* Left side with logo and navigation links */}
//       <div className="flex items-center">
//         {/* Logo */}
//         <Image 
//           src={GQ} 
//           alt="GQ Logo" 
//           width={52} 
//           height={26} 
//         />
        
//         {/* Navigation Links - directly next to logo */}
//         <div className="flex items-center ml-15 ">
//           <button 
//             onClick={() => handleNavigation('/')}
//             className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm px-4"
//           >
//             Home
//           </button>
//           <div className="w-px h-5 bg-gray-700"></div>
//           <button 
//             onClick={() => handleNavigation('/products')}
//             className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm px-4"
//           >
//             Game Store
//           </button>
//           <div className="w-px h-5 bg-gray-700"></div>
//           <button 
//             onClick={() => handleNavigation('/leaderboard')}
//             className="cursor-pointer hover:text-gray-300 transition-colors font-medium text-sm px-4"
//           >
//             Leaderboard
//           </button>
//         </div>
//       </div>

//       {/* Push the right elements to the right edge */}
//       <div className="flex-grow"></div>

//       {/* RIGHT SIDE - search and icons */}
//       <div className="flex items-center space-x-4">
//         {/* Search Bar */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-black text-white border border-gray-800 rounded-full w-64 pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-600"
//             suppressHydrationWarning
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//             <Image 
//               src={searchIcon} 
//               alt="Search" 
//               width={16} 
//               height={16} 
//             />
//           </div>
//         </div>

//         {/* Icons */}
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={notiImg} alt="Notification" width={20} height={20} />
//         </button>
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={cartImg} alt="Cart" width={20} height={20} />
//         </button>
//         <button className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors">
//           <Image src={Profile} alt="Profile" width={20} height={20} />
//         </button>
//       </div>
//     </nav>
//   );
// };




// Polishing 

'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NotificationDropdown from './navbarcomp/NotificationDropdown'; // Import your NotificationDropdown component
import notiImg from '../icons/ion_notifications.png';
import cartImg from '../icons/Vector.png';
import Profile from '../icons/Profile.png';
import searchIcon from '../icons/Search.png';
import GQ from '../icons/GQ.png';


export const Navbar = () => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black text-white shadow-md flex flex-col md:flex-row items-center px-6 md:px-10 py-4 gap-4 md:gap-0">

      {/* Left - Logo + Nav Links */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Image src={GQ} alt="GQ Logo" width={52} height={26} />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center ml-10 space-x-6">
  {['Home', 'Product Store', 'Leaderboard'].map((label, idx) => (
    <React.Fragment key={label}>
      <button
        onClick={() =>
          handleNavigation(
            label === 'Home' ? '/' : label === 'Product Store' ? '/products' : '/leaderboard'
          )
        }
        className="text-lg font-medium hover:text-gray-300 px-2" // 🔥 change text-sm → text-base or larger
      >
        {label}
      </button>
      {idx < 2 && <div className="w-px h-5 bg-gray-700"></div>}
    </React.Fragment>
  ))}
</div>


      {/* Spacer */}
      <div className="flex-grow" />

      {/* Right Side - Search + Icons */}
      <div className="flex items-center text-xl gap-3">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent text-white border border-gray-700 rounded-full w-84 pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image src={searchIcon} alt="Search" width={16} height={16} />
          </div>
        </div>

        {/* Icons */}
        <NotificationDropdown />

{/* Cart Icon */}
<button className="rounded-full p-2 border text-3xl border-gray-700 hover:border-gray-500 transition">
  <Image src={cartImg} alt="Cart" width={20} height={20} />
</button>

{/* Profile Icon */}
<button className="rounded-full p-2 border text-3xl border-gray-700 hover:border-gray-500 transition">
  <Image src={Profile} alt="Profile" width={20} height={20} />
</button>

      </div>
    </nav>
  );
};

