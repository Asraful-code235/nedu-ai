"use client";
import { useState } from "react";
import JobGrind from "./JobGrind";
import Vision from "./Vision";
import MakesUsDifferent from "./MakesUsDifferent";

export default function VisionAndGrindContainer() {
  const [isNedu, setIsNedu] = useState(false);
  return (
    <section>
      <Vision isNedu={isNedu} />
      <JobGrind isNedu={isNedu} setIsNedu={setIsNedu} />
      <MakesUsDifferent />
    </section>
  );
}
