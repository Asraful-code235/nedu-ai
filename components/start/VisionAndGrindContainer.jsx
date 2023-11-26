"use client";
import { useState } from "react";
import JobGrind from "./JobGrind";
import Vision from "./Vision";
import MakesUsDifferent from "./MakesUsDifferent";
import { JobApplication } from "./JobApplication";

export default function VisionAndGrindContainer() {
  const [isNedu, setIsNedu] = useState(false);
  return (
    <section className="overlap-wrapper ">
      <div className="relative ">
        {/* {!isNedu ? (
          <>
            <img
              className="absolute top-0 left-0 -z-50"
              alt="Rectangle"
              src="/icons/linearGradient.webp"
            />
          </>
        ) : (
          <>
            <div className="w-[252px] h-[252px] top-[1468px] left-[77px] rounded-[126px] shadow-[0px_0px_34.29px_#ff980e80,0px_0px_68.58px_#ff980eb2,0px_0px_240.03px_#ff980ecc,0px_0px_480.06px_#ff980eb2,0px_0px_822.96px_#ff980ecc,0px_0px_1440.18px_#ff980ecc] absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,152,14,0.5)_0%,rgba(255,152,14,0)_100%)]" />
            <div className="w-[382px] h-[382px] top-[2357px] left-[1646px] rounded-[191.1px] rotate-[99.09deg] shadow-[0px_0px_37.8px_#ff980e99,0px_0px_75.6px_#ff980e99,0px_0px_264.61px_#ff980e66,0px_0px_529.23px_#ff980e99,0px_0px_907.25px_#ff980ecc,0px_0px_1587.68px_#ff980e] absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,152,14,0.5)_0%,rgba(255,152,14,0)_100%)]" />
            <div className="absolute top-0 left-0 right-0 z-50 backdrop-blur-[600px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(600px)_brightness(100%)] [background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(63,63,63,0.02)_100%)]" />
          </>
        )} */}
        <Vision isNedu={isNedu} />
        <JobGrind isNedu={isNedu} setIsNedu={setIsNedu} />
        <MakesUsDifferent />
      </div>
    </section>
  );
}
