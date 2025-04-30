// 'use client';
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import SideBarMagic from './SideBarMagic'; // This is the big expanded sidebar

// const MainSidebarWrapper = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex">
//       {/* Small Sidebar always visible */}
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="z-20"
//       >
//         <Sidebar />
//       </div>

//       {/* Big Sidebar - Slide in on hover */}
//       {hovered && (
//         <div
//           className="absolute left-20 top-0 h-full transition-all duration-300 z-10"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           <SideBarMagic />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainSidebarWrapper;


// "use client";
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import SideBarMagic from "./SideBarMagic";

// const MainSidebarWrapper = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div 
//       className="relative flex"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Small Sidebar - Always visible */}
//       <div className="z-10">
//         <Sidebar />
//       </div>

//       {/* Big Sidebar - Sliding on top */}
//       <div 
//         className={`absolute top-0 left-0 h-full z-20 transition-all duration-1000 ${
//           hovered ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <SideBarMagic />
//       </div>
//     </div>
//   );
// };

// export default MainSidebarWrapper;



// 'use client';
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import SideBarMagic from "./SideBarMagic";

// const MainSidebarWrapper = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex">
//       {/* Small Sidebar - Hover detection happens here */}
//       <div
//         className="z-10"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <Sidebar/>
//       </div>

//       {/* Big Sidebar - Controlled by hovered state */}
//       <div
//         className={`absolute top-0 left-0 h-full z-20 transition-all duration-500 ${
//           hovered ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <SideBarMagic />
//       </div>
//     </div>
//   );
// };

// export default MainSidebarWrapper;



// 2


// 'use client';
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import SideBarMagic from "./SideBarMagic";

// const MainSidebarWrapper = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex" 
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Small Sidebar */}
//       <div className="z-10">
//         <Sidebar/>
//       </div>

//       {/* Big Sidebar - Controlled by hovered */}
//       <div
//         className={`absolute top-0 left-0 h-full z-20 transition-all duration-500 ${
//           hovered ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <SideBarMagic />
//       </div>
//     </div>
//   );
// };

// export default MainSidebarWrapper;




'use client';
import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import SideBarMagic from './SideBarMagic';

const MainSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setHovered(inside);
    }
  };

  return (
    <div className="flex" onMouseMove={handleMouseMove} onMouseLeave={() => setHovered(false)}>
      {/* Sidebar + SideBarMagic wrapper */}
      <div ref={wrapperRef} className="relative">
        {/* Small Sidebar */}
        <div className="relative z-10 ">
          <Sidebar />
        </div>

        {/* Big Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-500 ease-in-out ${
            hovered ? 'translate-x-0' : '-translate-x-full'
          } z-20`}
        >
          <SideBarMagic />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainSidebarWrapper;


