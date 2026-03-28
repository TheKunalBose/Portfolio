"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import SectionReveal from "@/components/ui/SectionReveal";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* ── Animated moving starfield background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="starfield-layer starfield-1" />
        <div className="starfield-layer starfield-2" />
        <div className="starfield-layer starfield-3" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <SectionReveal>
          <Grid />
        </SectionReveal>
        <SectionReveal>
          <RecentProjects />
        </SectionReveal>
        <SectionReveal>
          <Clients />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Approach />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </div>
    </main>
  );
};

export default Home;
