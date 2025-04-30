// 'use client';
// import Link from "next/link";
// import Image from "next/image";
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png'; 
// import GameStoreIcon from "../icons/sidebaricons/store.png";
// import PaymentsIcon from "../icons/sidebaricons/payment.png";
// import LeaderboardIcon from "../icons/sidebaricons/trophy.png";
// import SettingsIcon from "../icons/sidebaricons/settings.png";
// import LogoutIcon from "../icons/sidebaricons/logout.png";
//  // Assuming you have a logo
// const SideBarMagic = () => {
//   return (
//     <div className="h-screen bg-black w-20 hover:w-60 transition-all duration-300 flex flex-col justify-between py-5 px-3 group">

//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
        
            
        

//         {/* Main Links */}
//         <nav className="flex flex-col items-center gap-8">
//           {/* Home */}
//           <Link href="/" className="flex items-center gap-4 group-hover:w-full">
//             <Image src={HomeIcon} alt="Home" className="w-6 h-6" />
//             <span className="hidden group-hover:inline text-orange-500 font-semibold">Home</span>
//           </Link>

//           {/* Messages */}
//           <Link href="/messages" className="flex items-center gap-4 relative">
//             <Image src={MessagesIcon} alt="Messages" className="w-6 h-6" />
//             <span className="hidden group-hover:inline text-white">Messages</span>
//             {/* Red dot for notification */}
//             <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//           </Link>

//           {/* Game Store */}
//           <Link href="/products" className="flex items-center gap-4">
//             <Image src={GameStoreIcon} alt="Game Store" className="w-6 h-6" />
//             <span className="hidden group-hover:inline text-white">Game Store</span>
//           </Link>

//           {/* Payments */}
//           <Link href="/payments" className="flex items-center gap-4">
//             <Image src={PaymentsIcon} alt="Payments" className="w-6 h-6" />
//             <span className="hidden group-hover:inline text-white">Payments</span>
//           </Link>

//           {/* Leaderboard */}
//           <Link href="/leaderboard" className="flex items-center gap-4">
//             <Image src={LeaderboardIcon} alt="Leaderboard" className="w-6 h-6" />
//             <span className="hidden group-hover:inline text-white">Leaderboard</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Bottom Links */}
//       <div className="flex flex-col items-center gap-8">
//         {/* Settings */}
//         <Link href="/settings" className="flex items-center gap-4">
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="hidden group-hover:inline text-white">Settings</span>
//         </Link>

//         {/* Logout */}
//         <Link href="/logout" className="flex items-center gap-4">
//           <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//           <span className="hidden group-hover:inline text-white">Logout</span>
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default SideBarMagic;

//  2nd
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png'; 
// import GameStoreIcon from "../icons/sidebaricons/store.png";
// import PaymentsIcon from "../icons/sidebaricons/payment.png";
// import LeaderboardIcon from "../icons/sidebaricons/trophy.png";
// import SettingsIcon from "../icons/sidebaricons/settings.png";
// import LogoutIcon from "../icons/sidebaricons/logout.png";
// import GameQuestLogo from "../icons/GameQuest.png";

// const SideBarMagic = () => {
//   return (
//     <div className="h-screen w-60 bg-black transition-all duration-300 flex flex-col justify-between py-5 px-3">
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         <img 
//           src={GameQuestLogo.src}
//           alt="GameQuest Logo"
//           className="w-[216px] h-[24px] object-contain"
//         />

//         {/* Main Links */}
//         <nav className="flex flex-col items-start gap-8">
//           <Link href="/" className="flex items-center gap-4 w-full">
//             <Image src={HomeIcon} alt="Home" className="w-6 h-6" />
//             <span className="text-orange-500 font-semibold">Home</span>
//           </Link>
//           <Link href="/messages" className="flex items-center gap-4 w-full relative">
//             <Image src={MessagesIcon} alt="Messages" className="w-6 h-6" />
//             <span className="text-white">Messages</span>
//             <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//           </Link>
//           <Link href="/products" className="flex items-center gap-4 w-full">
//             <Image src={GameStoreIcon} alt="Game Store" className="w-6 h-6" />
//             <span className="text-white">Game Store</span>
//           </Link>
//           <Link href="/payments" className="flex items-center gap-4 w-full">
//             <Image src={PaymentsIcon} alt="Payments" className="w-6 h-6" />
//             <span className="text-white">Payments</span>
//           </Link>
//           <Link href="/leaderboard" className="flex items-center gap-4 w-full">
//             <Image src={LeaderboardIcon} alt="Leaderboard" className="w-6 h-6" />
//             <span className="text-white">Leaderboard</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Bottom Links */}
//       <div className="flex flex-col items-start gap-8">
//         <Link href="/settings" className="flex items-center gap-4 w-full">
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="text-white">Settings</span>
//         </Link>
//         <Link href="/logout" className="flex items-center gap-4 w-full">
//           <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//           <span className="text-white">Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;

// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import GameQuestLogo from '../icons/GameQuest.png';
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png'; 
// import GameStoreIcon from '../icons/sidebaricons/store.png';
// import PaymentsIcon from '../icons/sidebaricons/payment.png';
// import LeaderboardIcon from '../icons/sidebaricons/trophy.png';
// import SettingsIcon from '../icons/sidebaricons/settings.png';
// import LogoutIcon from '../icons/sidebaricons/logout.png';

// const SideBarMagic = () => {
//   return (
//     <div className="h-screen w-60 bg-black transition-all duration-500 flex flex-col justify-between py-5 px-3">
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         <img
//           src={GameQuestLogo.src}
//           alt="GameQuest Logo"
//           className="w-[216px] h-[24px] object-contain"
//         />

//         {/* Main Links */}
//         <nav className="flex flex-col items-start gap-8">
//           <Link href="/" className="flex items-center gap-4 w-full">
//             <Image src={HomeIcon} alt="Home" className="w-6 h-6" />
//             <span className="text-orange-500 font-semibold">Home</span>
//           </Link>

//           <Link href="/messages" className="flex items-center gap-4 w-full relative">
//             <Image src={MessagesIcon} alt="Messages" className="w-6 h-6" />
//             <span className="text-white">Messages</span>
//             <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//           </Link>

//           <Link href="/products" className="flex items-center gap-4 w-full">
//             <Image src={GameStoreIcon} alt="Game Store" className="w-6 h-6" />
//             <span className="text-white">Game Store</span>
//           </Link>

//           <Link href="/payments" className="flex items-center gap-4 w-full">
//             <Image src={PaymentsIcon} alt="Payments" className="w-6 h-6" />
//             <span className="text-white">Payments</span>
//           </Link>

//           <Link href="/leaderboard" className="flex items-center gap-4 w-full">
//             <Image src={LeaderboardIcon} alt="Leaderboard" className="w-6 h-6" />
//             <span className="text-white">Leaderboard</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Bottom Links */}
//       <div className="flex flex-col items-start gap-8">
//         <Link href="/settings" className="flex items-center gap-4 w-full">
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="text-white">Settings</span>
//         </Link>

//         <Link href="/logout" className="flex items-center gap-4 w-full">
//           <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//           <span className="text-white">Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;


// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import GameQuestLogo from '../icons/GameQuest.png';
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png';
// import GameStoreIcon from '../icons/sidebaricons/store.png';
// import PaymentsIcon from '../icons/sidebaricons/payment.png';
// import LeaderboardIcon from '../icons/sidebaricons/trophy.png';
// import SettingsIcon from '../icons/sidebaricons/settings.png';
// import LogoutIcon from '../icons/sidebaricons/logout.png';

// const SideBarMagic = () => {
//   return (
//     <div className="h-screen w-60 bg-black flex flex-col justify-between py-5 px-3">
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         <img
//           src={GameQuestLogo.src}
//           alt="GameQuest Logo"
//           className="w-[216px] h-[24px] object-contain"
//         />

//         {/* Main Links */}
//         <nav className="flex flex-col items-start gap-8">
//           <Link href="/" className="flex items-center gap-4">
//             <Image src={HomeIcon} alt="Home" className="w-6 h-6" />
//             <span className="text-orange-500 font-semibold">Home</span>
//           </Link>
//           <Link href="/messages" className="flex items-center gap-4">
//             <Image src={MessagesIcon} alt="Messages" className="w-6 h-6" />
//             <span className="text-white">Messages</span>
//           </Link>
//           <Link href="/products" className="flex items-center gap-4">
//             <Image src={GameStoreIcon} alt="Game Store" className="w-6 h-6" />
//             <span className="text-white">Game Store</span>
//           </Link>
//           <Link href="/payments" className="flex items-center gap-4">
//             <Image src={PaymentsIcon} alt="Payments" className="w-6 h-6" />
//             <span className="text-white">Payments</span>
//           </Link>
//           <Link href="/leaderboard" className="flex items-center gap-4">
//             <Image src={LeaderboardIcon} alt="Leaderboard" className="w-6 h-6" />
//             <span className="text-white">Leaderboard</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Bottom Links */}
//       <div className="flex flex-col items-start gap-8">
//         <Link href="/settings" className="flex items-center gap-4">
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="text-white">Settings</span>
//         </Link>
//         <Link href="/logout" className="flex items-center gap-4">
//           <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//           <span className="text-white">Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;





// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import GameQuestLogo from '../icons/GameQuest.png';
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png';
// import StoreIcon from '../icons/sidebaricons/store.png';
// import PaymentIcon from '../icons/sidebaricons/payment.png';
// import TrophyIcon from '../icons/sidebaricons/trophy.png';
// import SettingsIcon from '../icons/sidebaricons/settings.png';
// import LogoutIcon from '../icons/sidebaricons/logout.png';

// const links = [
//   { href: '/', icon: HomeIcon, title: 'Home' },
//   { href: '/messages', icon: MessagesIcon, title: 'Messages' },
//   { href: '/store', icon: StoreIcon, title: 'Game Store' },
//   { href: '/payment', icon: PaymentIcon, title: 'Payments' },
//   { href: '/leaderboard', icon: TrophyIcon, title: 'Leaderboard' },
// ];

// const bottomLinks = [
//   { href: '/settings', icon: SettingsIcon, title: 'Settings' },
//   { href: '/logout', icon: LogoutIcon, title: 'Logout' },
// ];

// const SideBarMagic = () => {
//   return (
//     <div className="h-auto  w-60 pt-10 pb-3 bg-black flex flex-col justify-between py-1  px-4  ">
//       {/* Logo */}
//       <div className="flex items-center justify-center  mb-10">
//         <img src={GameQuestLogo.src} alt="GameQuest Logo" className="w-[216px] h-[24px] object-contain" />
//       </div>

//       {/* Links */}
//       <nav className="flex flex-col gap-8">
//         {links.map(({ href, icon, title }, index) => (
//           <Link key={index} href={href} className="flex items-center gap-4">
//             <Image src={icon} alt={title} className="w-6 h-6" />
//             <span className="text-white">{title}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Bottom Divider */}
//       <div className="border-t border-white/20 w-full my-12" />
//       <div className="flex flex-col gap-10 mt-6">
//         {bottomLinks.map(({ href, icon, title }, index) => (
//           <Link key={index} href={href} className="flex items-center gap-4">
//             <Image src={icon} alt={title} className="w-6 h-6" />
//             <span className="text-white">{title}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;
 

// before polishing

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// import GameQuestLogo from '../icons/GameQuest.png';
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png';
// import StoreIcon from '../icons/sidebaricons/store.png';
// import PaymentIcon from '../icons/sidebaricons/payment.png';
// import TrophyIcon from '../icons/sidebaricons/trophy.png';
// import SettingsIcon from '../icons/sidebaricons/settings.png';
// import LogoutIcon from '../icons/sidebaricons/logout.png';

// const links = [
//   { href: '/', icon: HomeIcon, title: 'Home' },
//   { href: '/messages', icon: MessagesIcon, title: 'Messages' },
//   { href: '/store', icon: StoreIcon, title: 'Game Store' },
//   { href: '/payment', icon: PaymentIcon, title: 'Payments' },
//   { href: '/leaderboard', icon: TrophyIcon, title: 'Leaderboard' },
// ];

// const SideBarMagic = () => {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('loggedIn');
//     localStorage.removeItem('redirectAfterLogin');
//     router.push('/login');
//   };

//   return (
//     <div className="h-auto w-60 pt-10 pb-3 bg-black flex flex-col justify-between px-4">
//       {/* Logo */}
//       <div className="flex items-center justify-center mb-10">
//         <img src={GameQuestLogo.src} alt="GameQuest Logo" className="w-[216px] h-[24px] object-contain" />
//       </div>

//       {/* Main Links */}
//       <nav className="flex flex-col gap-8">
//         {links.map(({ href, icon, title }, index) => (
//           <Link key={index} href={href} className="flex items-center gap-4">
//             <Image src={icon} alt={title} className="w-6 h-6" />
//             <span className="text-white">{title}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Divider */}
//       <div className="border-t border-white/20 w-full my-12" />

//       {/* Settings + Conditional Logout */}
//       <div className="flex flex-col gap-10 mt-6">
//         <Link href="/settings" className="flex items-center gap-4">
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="text-white">Settings</span>
//         </Link>

//         {isLoggedIn && (
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 text-white"
//           >
//             <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//             <span>Logout</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;



// POLISHING

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// import GameQuestLogo from '../icons/GameQuest.png';
// import HomeIcon from '../icons/sidebaricons/Home.png';
// import MessagesIcon from '../icons/sidebaricons/notifs.png';
// import StoreIcon from '../icons/sidebaricons/store.png';
// import PaymentIcon from '../icons/sidebaricons/payment.png';
// import TrophyIcon from '../icons/sidebaricons/trophy.png';
// import SettingsIcon from '../icons/sidebaricons/settings.png';
// import LogoutIcon from '../icons/sidebaricons/logout.png';

// const links = [
//   { href: '/', icon: HomeIcon, title: 'Home' },
//   { href: '/messages', icon: MessagesIcon, title: 'Messages' },
//   { href: '/store', icon: StoreIcon, title: 'Game Store' },
//   { href: '/payment', icon: PaymentIcon, title: 'Payments' },
//   { href: '/leaderboard', icon: TrophyIcon, title: 'Leaderboard' },
// ];

// const SideBarMagic = () => {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('loggedIn');
//     localStorage.removeItem('redirectAfterLogin');
//     router.push('/login');
//   };

//   return (
//     <div
//       className="h-screen w-[258px] bg-[#3D352A]/50 backdrop-blur-[40px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] pt-7 pb-3 flex flex-col justify-between px-6"
//       style={{ minHeight: '818px' }}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-center mb-3">
//         <img
//           src={GameQuestLogo.src}
//           alt="GameQuest Logo"
//           className="w-[216px] h-[24px] object-contain"
//         />
//       </div>

//       {/* Main Links */}
//       <nav className="flex flex-col gap-6">
//         {links.map(({ href, icon, title }, index) => (
//           <Link
//             key={index}
//             href={href}
//             className="flex items-center gap-4 text-white hover:text-[#F5D6A2] transition"
//           >
//             <Image src={icon} alt={title} className="w-6 h-6" />
//             <span className="text-[15px] font-medium">{title}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Divider */}
//       <div className="border-t border-white/20 w-full " />

//       {/* Settings + Conditional Logout */}
//       <div className="flex flex-col gap-5 mt-1">
//         <Link
//           href="/settings"
//           className="flex items-center gap-4 text-white hover:text-[#F5D6A2] transition"
//         >
//           <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
//           <span className="text-[15px] font-medium">Settings</span>
//         </Link>

//         {isLoggedIn && (
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 text-white hover:text-[#F5D6A2] transition"
//           >
//             <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
//             <span className="text-[15px] font-medium">Logout</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SideBarMagic;

'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import GameQuestLogo from '../icons/GameQuest.png';
import HomeIcon from '../icons/sidebaricons/Home.png';
import MessagesIcon from '../icons/sidebaricons/notifs.png';
import StoreIcon from '../icons/sidebaricons/store.png';
import PaymentIcon from '../icons/sidebaricons/payment.png';
import TrophyIcon from '../icons/sidebaricons/trophy.png';
import SettingsIcon from '../icons/sidebaricons/settings.png';
import LogoutIcon from '../icons/sidebaricons/logout.png';

const links = [
  { href: '/', icon: HomeIcon, title: 'Home' },
  { href: '/messages', icon: MessagesIcon, title: 'Messages' },
  { href: '/store', icon: StoreIcon, title: 'Product Store' },
  { href: '/payment', icon: PaymentIcon, title: 'Payments' },
  { href: '/leaderboard', icon: TrophyIcon, title: 'Leaderboard' },
];

const SideBarMagic = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('redirectAfterLogin');
    router.push('/login');
  };

  return (
    <div
      className="h-screen w-[258px] bg-[#3D352A]/50 backdrop-blur-[40px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] pt-3 pb-4 flex flex-col px-6"
      style={{ minHeight: '818px' }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={GameQuestLogo.src}
          alt="GameQuest Logo"
          className="w-[216px] h-[24px] object-contain"
        />
      </div>

      {/* Main Links */}
      <nav className="flex flex-col gap-10 mt-6 mb-9">
        {links.map(({ href, icon, title }, index) => (
          <Link
            key={index}
            href={href}
            className="flex items-center gap-4 text-white hover:text-[#F5D6A2] transition"
          >
            <Image src={icon} alt={title} className="w-6 h-6" />
            <span className="text-[15px] font-medium">{title}</span>
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-t border-white/20 w-full my-3" />

      {/* Settings + Conditional Logout */}
      <div className="flex flex-col gap-9 mt-8">
        <Link
          href="/settings"
          className="flex items-center gap-3 text-white hover:text-[#F5D6A2] transition"
        >
          <Image src={SettingsIcon} alt="Settings" className="w-6 h-6" />
          <span className="text-[15px] font-medium">Settings</span>
        </Link>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-white hover:text-[#F5D6A2] transition"
          >
            <Image src={LogoutIcon} alt="Logout" className="w-6 h-6" />
            <span className="text-[15px] font-medium">Logout</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBarMagic;
