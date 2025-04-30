


// import LandingSection from "@/components/LandingSection";
// import Cards from "@/components/Cards";
// import EvolutionSection from "@/components/EvolutionSection";
// import Valorant from "@/components/Valorant";
// import Warlords from "@/components/Warlords";
// import MainSidebarWrapper from "@/components/MainSidebarWrapper";

// export default function Home() {
//   return (
//     <>
//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 h-full w-24 bg-black z-40">
//         <MainSidebarWrapper />
//       </div>

//       {/* Main Content */}
//       <div className="ml-24 flex-1 flex flex-col">
//         <main className="flex-1 px-8 pt-28 space-y-24">
//           {/* 👆 pt-28 => push content down after navbar height */}
//           <LandingSection />
//           <Cards />
//           <EvolutionSection />
//           <Valorant />
//           <Warlords />
//         </main>
//       </div>
//     </>
//   );
// }

// import LandingSection from "@/components/LandingSection";
// import Cards from "@/components/Cards";
// import EvolutionSection from "@/components/EvolutionSection";
// import Valorant from "@/components/Valorant";
// import Warlords from "@/components/Warlords";
// import MainSidebarWrapper from "@/components/MainSidebarWrapper";

// export default function Home() {
//   return (
//     <div className="flex w-full">
//       {/* Sidebar */}
//       <div className="top-0 left-0 z-40 h-full w-24 bg-black">
//         <MainSidebarWrapper />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-24 pt-24 bg-black min-h-screen">
//         {/* 👆 Added bg-black and min-h-screen to match background */}
//         <LandingSection />
//         <Cards />
//         <EvolutionSection />
//         <Valorant />
//         <Warlords />
//       </div>
//     </div>
//   );
// }



// import MainSidebarWrapper from "@/components/MainSidebarWrapper";
// import LandingSection from "@/components/LandingSection";
// import Cards from "@/components/Cards";
// import EvolutionSection from "@/components/EvolutionSection";
// import Valorant from "@/components/Valorant";
// import Warlords from "@/components/Warlords";

// export default function Home() {
//   return (
//     <div className="flex w-full">
//       Sidebar and Main Content inside MainSidebarWrapper
//       <MainSidebarWrapper>
//         {/* Content container - adjust padding to reduce gap */}
//         <div className="flex-1 flex flex-col bg-black min-h-screen pt-16 px-6">
//           {/* Reduce any additional gaps between components */}
//           <div className="mt-0 pr-50">
//             <LandingSection />
//           </div>
//           <Cards />
//           <EvolutionSection />
//           <Valorant />
//           <Warlords />
//         </div>
//       </MainSidebarWrapper>
//     </div>
//   );
// }



// just seeing the GameDetail PAGE


// before polish
// import MainSidebarWrapper from "@/components/MainSidebarWrapper";
// import LandingSection from "@/components/LandingSection";
// import Cards from "@/components/Cards";
// import EvolutionSection from "@/components/EvolutionSection";
// import Valorant from "@/components/Valorant";
// import Warlords from "@/components/Warlords";

// export default function Home() {
//   return (
//     <div className="w-full">
//      <MainSidebarWrapper>
//       <LandingSection />
//       <Cards />
//       <EvolutionSection />
//       <Valorant />
//       <Warlords />
//       {/* Sidebar and Main Content inside MainSidebarWrapper */}
//       </MainSidebarWrapper>
//     </div>
//   );
// }



// adter polish

import MainSidebarWrapper from "@/components/MainSidebarWrapper";
import LandingSection from "@/components/LandingSection";
import Cards from "@/components/Cards";
import EvolutionSection from "@/components/EvolutionSection";
import Valorant from "@/components/Valorant";
import Warlords from "@/components/Warlords";

export default function Home() {
  return (
    <div className="w-full">
      <MainSidebarWrapper>
        <div className="border-l border-white/20 pl-0">
          <LandingSection />
          <Cards />
          <EvolutionSection />
          <Valorant />
          <Warlords />
        </div>
      </MainSidebarWrapper>
    </div>
  );
}

