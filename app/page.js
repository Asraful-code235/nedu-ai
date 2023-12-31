import Image from "next/image";

import Navbar from "@/components/shared/Navbar";
import ForEducation from "@/components/start/ForEducation";
import ForIndividuals from "@/components/start/ForIndividuals";
import GridItems from "@/components/start/GridItems";
import Hero from "@/components/start/Hero";
import JobGrind from "@/components/start/JobGrind";
import OurStory from "@/components/start/OurStory";
import Partners from "@/components/start/Partners";
import VisionAndGrindContainer from "@/components/start/VisionAndGrindContainer";
import WhoWeServe from "@/components/start/WhoWeServe";
import YouthEmpowerment from "@/components/start/YouthEmpowerment";
import Timeline from "@/components/start/Timeline";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <section className="bgImage hero overflow-hidden">
        <Navbar />
        <Hero />
      </section>
      <Partners />
      <VisionAndGrindContainer />
      <GridItems />
      <YouthEmpowerment />
      <WhoWeServe />
      <ForEducation />
      <ForIndividuals />
      <Timeline />
      <section className="relative from-[#232323] via-slate-200 to-transparent ">
        <OurStory />
      </section>
    </section>
  );
}
