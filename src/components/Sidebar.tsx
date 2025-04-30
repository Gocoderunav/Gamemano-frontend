

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import GQ from "../icons/GQ.png";
// import Home from "../icons/sidebaricons/Home.png";
// import notifs from "../icons/sidebaricons/notifs.png";
// import trophy from "../icons/sidebaricons/trophy.png";
// import xbox from "../icons/sidebaricons/xbox.png";
// import logout from "../icons/sidebaricons/logout.png";
// import store from "../icons/sidebaricons/store.png";
// import payment from "../icons/sidebaricons/payment.png";
// import settings from "../icons/sidebaricons/settings.png";
// import GameQuestLogo from "../icons/GameQuest.png";
// const mainLinks = [
//   { href: "/", icon: Home, alt: "Home" },
//   { href: "/mail", icon: notifs, alt: "Notifications", badge: true },
//   { href: "/store", icon: store, alt: "Store" },
//   { href: "/payment", icon: payment, alt: "Payment" },
//   { href: "/xbox", icon: xbox, alt: "Xbox" },
//   { href: "/trophy", icon: trophy, alt: "Trophy" },
// ];

// const bottomLinks = [
//   { href: "/setting", icon: settings, alt: "Settings" },
//   { href: "/logout", icon: logout, alt: "Logout" },
// ];

// const Sidebar = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className={`h-screen bg-black ${
//         hovered ? "w-60" : "w-20"
//       } transition-all duration-300 flex flex-col justify-between py-5 px-3`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         {!hovered ? (
//           <Image src={GQ} alt="Logo" className="w-10 h-10" />
//         ) : (
//           <img 
//     src={GameQuestLogo.src} 
//     alt="GameQuest Logo" 
//     className="w-[216px] h-[24px] object-contain"
//   />
//         )}

//         {/* Main Links */}
//         <nav className="flex flex-col items-center gap-8">
//           {mainLinks.map(({ href, icon, alt, badge }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="flex items-center gap-4 w-full relative"
//             >
//               <Image src={icon} alt={alt} className="w-6 h-6" />
//               {hovered && (
//                 <span
//                   className={`text-sm ${
//                     alt === "Home" ? "text-orange-500 font-semibold" : "text-white"
//                   }`}
//                 >
//                   {alt}
//                 </span>
//               )}
//               {badge && (
//                 <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//               )}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Bottom Divider and Links */}
//       <div className="border-t border-white/20 w-full my-14" />
//       <div className="flex flex-col items-center gap-8">
//         {bottomLinks.map(({ href, icon, alt }, index) => (
//           <Link
//             key={index}
//             href={href}
//             className="flex items-center gap-4 w-full"
//           >
//             <Image src={icon} alt={alt} className="w-6 h-6" />
//             {hovered && <span className="text-white text-sm">{alt}</span>}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// "use client";
// import Link from "next/link";
// import Image from "next/image";

// import GQ from "../icons/GQ.png";
// import Home from "../icons/sidebaricons/Home.png";
// import notifs from "../icons/sidebaricons/notifs.png";
// import trophy from "../icons/sidebaricons/trophy.png";
// import xbox from "../icons/sidebaricons/xbox.png";
// import logout from "../icons/sidebaricons/logout.png";
// import store from "../icons/sidebaricons/store.png";
// import payment from "../icons/sidebaricons/payment.png";
// import settings from "../icons/sidebaricons/settings.png";

// const mainLinks = [
//   { href: "/", icon: Home, alt: "Home" },
//   { href: "/mail", icon: notifs, alt: "Notifications", badge: true },
//   { href: "/store", icon: store, alt: "Store" },
//   { href: "/payment", icon: payment, alt: "Payment" },
//   { href: "/xbox", icon: xbox, alt: "Xbox" },
//   { href: "/trophy", icon: trophy, alt: "Trophy" },
// ];

// const bottomLinks = [
//   { href: "/setting", icon: settings, alt: "Settings" },
//   { href: "/logout", icon: logout, alt: "Logout" },
// ];

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-20 bg-black text-gray-100 flex flex-col justify-between py-5 items-center">
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         <Image src={GQ} alt="Logo" className="w-10 h-10" />
        
//         <nav className="flex flex-col items-center gap-9">
//           {mainLinks.map(({ href, icon, alt, badge }, index) => (
//             <Link key={index} href={href}>
//               <div className="relative">
//                 <Image src={icon} alt={alt} className="w-6 h-6" />
//                 {badge && (
//                   <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//                 )}
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Bottom Divider and Links */}
//       <div className="border-t border-white/20 w-full my-14" />
//       <div className="flex flex-col items-center gap-10 w-full">
//         {bottomLinks.map(({ href, icon, alt }, index) => (
//           <Link key={index} href={href}>
//             <Image src={icon} alt={alt} className="w-6 h-6" />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// 'use client';
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// import GQ from "../icons/GQ.png";
// import Home from "../icons/sidebaricons/Home.png";
// import notifs from "../icons/sidebaricons/notifs.png";
// import trophy from "../icons/sidebaricons/trophy.png";
// import xbox from "../icons/sidebaricons/xbox.png";
// import logout from "../icons/sidebaricons/logout.png";
// import store from "../icons/sidebaricons/store.png";
// import payment from "../icons/sidebaricons/payment.png";
// import settings from "../icons/sidebaricons/settings.png";

// const mainLinks = [
//   { href: "/", icon: Home, alt: "Home" },
//   { href: "/mail", icon: notifs, alt: "Notifications", badge: true },
//   { href: "/store", icon: store, alt: "Store" },
//   { href: "/payment", icon: payment, alt: "Payment" },
//   { href: "/xbox", icon: xbox, alt: "Xbox" },
//   { href: "/trophy", icon: trophy, alt: "Trophy" },
// ];


// const bottomLinks = [
//   { href: "/setting", icon: settings, alt: "Settings" },
//   { href: "/logout", icon: logout, alt: "Logout" },
// ];

// const Sidebar = () => {
//   const [hoverside, setHoverSide] = React.useState(false);
//   return (
//     <div
//       className="h-screen w-20 bg-black text-gray-100 flex flex-col justify-between py-5 items-center"
     
//     >
//       {/* Top Logo */}
//       <div className="flex flex-col items-center gap-10">
//         <Image src={GQ} alt="Logo" className="w-10 h-10" />
        
//         <nav className="flex flex-col items-center gap-9">
//           {mainLinks.map(({ href, icon, alt, badge }, index) => (
//             <Link key={index} href={href}>
//               <div className="relative">
//                 <Image src={icon} alt={alt} className="w-6 h-6" />
//                 {badge && (
//                   <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
//                 )}
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Bottom Divider and Links */}
//       <div className="border-t border-white/20 w-full my-14" />
//       <div className="flex flex-col items-center gap-10 w-full">
//         {bottomLinks.map(({ href, icon, alt }, index) => (
//           <Link key={index} href={href}>
//             <Image src={icon} alt={alt} className="w-6 h-6" />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import GQ from '../icons/GQ.png';
import HomeIcon from '../icons/sidebaricons/Home.png';
import MessagesIcon from '../icons/sidebaricons/notifs.png';
import StoreIcon from '../icons/sidebaricons/store.png';
import PaymentIcon from '../icons/sidebaricons/payment.png';
import TrophyIcon from '../icons/sidebaricons/trophy.png';
import SettingsIcon from '../icons/sidebaricons/settings.png';
import LogoutIcon from '../icons/sidebaricons/logout.png';

const links = [
  { href: '/', icon: HomeIcon, alt: 'Home' },
  { href: '/messages', icon: MessagesIcon, alt: 'Messages' },
  { href: '/store', icon: StoreIcon, alt: 'Game Store' },
  { href: '/payment', icon: PaymentIcon, alt: 'Payments' },
  { href: '/leaderboard', icon: TrophyIcon, alt: 'Leaderboard' },
];

const bottomLinks = [
  { href: '/settings', icon: SettingsIcon, alt: 'Settings' },
  { href: '/logout', icon: LogoutIcon, alt: 'Logout' },
];

const Sidebar = () => {
  return (
    <div className="h-auto mt-20 w-26 bg-black flex flex-col justify-between items-center py-1">
      {/* Top Logo */}
      

      {/* Links */}
      <nav className="flex flex-col items-center gap-8 mt-8">
        {links.map(({ href, icon, alt }, index) => (
          <Link key={index} href={href}>
            <Image src={icon} alt={alt} className="w-6 h-6" />
          </Link>
        ))}
      </nav>

      {/* Bottom Divider */}
      <div className="border-t border-white/20 w-full my-12" />
      <div className="flex flex-col items-center gap-10 mt-6">
        {bottomLinks.map(({ href, icon, alt }, index) => (
          <Link key={index} href={href}>
            <Image src={icon} alt={alt} className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;




