"use client";
import { useState } from "react";
import JobGrind from "./JobGrind";
import Vision from "./Vision";
import MakesUsDifferent from "./MakesUsDifferent";
import { JobApplication } from "./JobApplication";
import Image from "next/image";

export default function VisionAndGrindContainer() {
  const [isNedu, setIsNedu] = useState(false);
  return (
    <section className="overlap-wrapper mt-6 lg:mt-32 ">
      <div className="relative ">
        {!isNedu ? (
          <>
            <Image
              className="absolute top-0 left-0 -z-50"
              alt="Rectangle"
              src="/icons/linearGradient.webp"
              width={1999}
              height={1500}
              priority
            />
          </>
        ) : (
          <>
            <Image
              className="absolute top-0 left-0 -z-50"
              alt="Rectangle"
              src="/icons/With NeduAI.webp"
              width={1999}
              height={1500}
              priority
            />
          </>
        )}
        <Vision isNedu={isNedu} />
        <JobGrind isNedu={isNedu} setIsNedu={setIsNedu} />
        <MakesUsDifferent />
      </div>
    </section>
  );
}
