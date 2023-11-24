import Image from "next/image";

import Navbar from "@/components/shared/Navbar";
import ForEducation from "@/components/start/ForEducation";
import ForIndividuals from "@/components/start/ForIndividuals";
import GridItems from "@/components/start/GridItems";
import Hero from "@/components/start/Hero";
import JobGrind from "@/components/start/JobGrind";
import OurStory from "@/components/start/OurStory";
import Partners from "@/components/start/Partners";
import Vision from "@/components/start/Vision";
import VisionAndGrindContainer from "@/components/start/VisionAndGrindContainer";
import WhoWeServe from "@/components/start/WhoWeServe";
import YouthEmpower from "@/components/start/YouthEmpower";
import YouthEmpowerment from "@/components/start/YouthEmpowerment";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <section className="bgImage hero overflow-hidden">
        <Navbar />
        <Hero />
        <div className="flex items-center justify-center pb-4">
          <div className="w-[138px] h-[5px] bg-white bg-opacity-20 rounded-[5px] "></div>
        </div>
      </section>
      <Partners />
      <YouthEmpowerment />
      <VisionAndGrindContainer />
      <GridItems />
      <WhoWeServe />
      <ForEducation />
      <ForIndividuals />
      <section className="relative">
        <OurStory />
      </section>
    </section>
  );
}
