"use client";
import { useState } from "react";
import JobGrind from "./JobGrind";
import Vision from "./Vision";
import MakesUsDifferent from "./MakesUsDifferent";
import { JobApplication } from "./JobApplication";

export default function VisionAndGrindContainer() {
  const [isNedu, setIsNedu] = useState(false);
  return (
    <section className="overlap-wrapper mt-6 lg:mt-32 ">
      <div className="relative ">
        {!isNedu ? (
          <>
            <img
              className="absolute top-0 left-0 -z-50"
              alt="Rectangle"
              src="/icons/linearGradient.webp"
            />
          </>
        ) : (
          <>
            <img
              className="absolute top-0 left-0 -z-50"
              alt="Rectangle"
              src="/icons/With NeduAI.webp"
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
