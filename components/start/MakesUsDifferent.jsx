"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function MakesUsDifferent({ isVisible }) {
  return (
    <motion.div className="dottedBackground p-6 md:p-12 lg:px-16 lg:py-16 2xl:px-32 xl:pb-0">
      <motion.div className="relative rounded-2xl lg:rounded-[60px] bg-[#FFE000] py-9 pb-10 sm:pb-16 lg:py-20 lg:pb-28">
        <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-2 lg:gap-4">
          <div className="text-xl px-4 max-w-[1088px] mx-auto tracking-[0.8px] lg:px-[12px] text-start lg:text-center lg:text-[56px] font-normal lg:leading-[64px] text-black text-opacity-90">
            <span className="font-semibold text-[#3366ff] text-opacity-100">
              <span className="relative">
                Redefining{" "}
                <img
                  src="/redefining.svg"
                  alt="solution__imag"
                  className="w-4 h-4 lg:w-[48px] lg:h-[38px] absolute -top-2.5 -right-1 lg:-top-5 lg:-right-3"
                />
              </span>{" "}
              recruitment
            </span>{" "}
            towards a more targeted, meaningful,{" "}
            <span className="font-semibold text-[#3366ff] text-opacity-100">
              and successful matchmaking
            </span>
          </div>
          <p className="visionParagraph max-w-[1152px] mx-auto text-start lg:text-center px-4 text-[11px] lg:text-xl xl:text-2xl font-medium text-black text-opacity-90 leading-5 lg:leading-[32px] tracking-[0px] ">
            Our platform ensures applicants apply thoughtfully for roles
            they&apos;re passionate about, enabling recruiters to select from a
            pool of genuinely interested and qualified candidates, thereby
            improving the hiring process and fostering fair talent-corporation
            interactions.
          </p>
        </div>

        <motion.div className="py-10 sm:py-16 sm:pb-14 xl:px-32 xl:py-28 lg:p-[96px] p-6 border border-transparent rounded-lg">
          <div className="DashboardBefore relative flex items-center justify-center">
            <div className=" DashboardBefore1 relative">
              <motion.div className=" DashboardBefore2 relative">
                <div className="w-[55vw] md:w-[45vw] DashboardBefore3 relative">
                  <Image
                    src={"/icons/Dashboard.webp"}
                    width={1600}
                    height={1600}
                    className="  object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />

                  <motion.div
                    // whileInView={{
                    //   x: [-200, 0],
                    //   scale: [0.5, 0.7, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    className="w-full block lg:hidden absolute -bottom-[40%] -left-[51%]  object-cover ease-out object-center rounded-xl cursor-pointer"
                  >
                    <Image
                      src={"/solution/date.svg"}
                      width={600}
                      height={600}
                      className="w-full scale-[0.35]"
                      alt="Dashboard"
                    />
                  </motion.div>
                  <motion.div
                    whileInView={{
                      x: [-200, 0],
                      scale: [0.5, 1.2, 1],
                    }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full hidden lg:block absolute -bottom-[50%] -left-[56%]  object-cover ease-out object-center rounded-xl cursor-pointer"
                  >
                    <Image
                      src={"/solution/date.svg"}
                      width={600}
                      height={600}
                      className="w-full scale-[0.6]"
                      alt="Dashboard"
                    />
                  </motion.div>
                  <motion.div
                    // whileInView={{
                    //   x: [200, 0],
                    //   scale: [0.5, 0.7, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    // transition={{ duration: 0.3 }}
                    className="w-full block lg:hidden absolute bottom-[62%] left-[35%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/jobs.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="scale-[0.56] w-full"
                    />
                  </motion.div>
                  <motion.div
                    whileInView={{
                      x: [200, 0],
                      scale: [0.5, 0.7, 1],
                    }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full hidden lg:block absolute bottom-[62%] left-[35%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/jobs.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="scale-[0.56] w-full"
                    />
                  </motion.div>

                  <motion.div
                    // whileInView={{
                    //   x: [-100, 0],
                    //   scale: [0.5, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    // transition={{ duration: 0.4 }}
                    className="w-full block lg:hidden absolute -top-[16%] right-[49%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/followup.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="w-full scale-[0.42]"
                    />
                  </motion.div>
                  <motion.div
                    whileInView={{
                      x: [-100, 0],
                      scale: [0.5, 1.1, 1],
                    }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full hidden lg:block absolute -top-[7%] right-[57%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/followup.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="w-full scale-[0.6]"
                    />
                  </motion.div>
                  <div
                    // whileInView={{
                    //   x: [200, 0],
                    //   scale: [0.5, 0.7, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    // transition={{ duration: 0.5 }}
                    className="w-full block  lg:hidden absolute -bottom-[25%] left-[44%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/talent.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="w-full scale-[0.6]"
                    />
                  </div>
                  <motion.div
                    whileInView={{
                      x: [200, 0],
                      scale: [0.5, 1.2, 1],
                    }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full hidden lg:block absolute -bottom-[25%] left-[44%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/solution/talent.svg"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="w-full scale-[0.6]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
