

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

