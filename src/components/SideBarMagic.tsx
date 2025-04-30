

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
