"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function MakesUsDifferent({ isVisible }) {
  return (
    <motion.div className="dottedBackground p-6 md:p-12 xl:px-32 xl:py-16 xl:pb-0">
      <motion.div className="relative rounded-2xl lg:rounded-[60px] bg-[#FFE000] py-9 lg:py-28">
        <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-2 lg:gap-8">
          <div className="text-xl max-w-[1543px] mx-auto px-4 lg:px-0 text-start lg:text-center lg:text-5xl xl:text-[64px] font-normal leading-normal text-black text-opacity-90">
            <span className="font-semibold tracking-[1.28px] text-[rgb(33,33,33)] text-opacity-90">
              Redefining recruitment
            </span>{" "}
            towards a more targeted, meaningful,{" "}
            <span className="font-semibold tracking-[1.28px] text-[rgb(33,33,33)] text-opacity-90">
              and successful matchmaking
            </span>
          </div>
          <p className="visionParagraph max-w-[1102px] mx-auto text-start lg:text-center px-4 text-[11px] lg:text-xl xl:text-2xl font-medium text-black text-opacity-90 leading-[166.667%] lg:tracking-[0.48px] ">
            We encourage applicants to invest genuine effort, beyond a mere
            click, to apply for positions they are truly passionate about. This
            commitment ensures that recruiters receive applications from
            individuals who are not just qualified, but also deeply interested
            in the specific role. Consequently, recruiters can focus on a more
            selected and engaged group of candidates, enhancing the efficiency
            and effectiveness of the hiring process. This approach not only
            raises the application-to-hire rate but also fosters a balanced and
            fair encounter between talents and corporations.
          </p>
        </div>

        <motion.div className="py-8 xl:px-32 xl:py-28 lg:p-[96px] p-6 border border-transparent rounded-lg">
          <div className="DashboardBefore relative flex items-center justify-center">
            <div className=" DashboardBefore1 relative">
              <motion.div className=" DashboardBefore2 relative">
                <div className="w-[65vw] md:w-[45vw] DashboardBefore3 relative">
                  <Image
                    src={"/icons/Dashboard.webp"}
                    width={1600}
                    height={1600}
                    className="w-full object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />

                  <motion.div
                    // whileInView={{
                    //   x: [-200, 0],
                    //   scale: [0.5, 0.7, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    // transition={{ duration: 0.4 }}
                    className="w-full block lg:hidden absolute -bottom-[40%] -left-[24%]  object-cover ease-out object-center rounded-xl cursor-pointer"
                  >
                    <Image
                      src={"/icons/callender.webp"}
                      width={600}
                      height={600}
                      className="w-full scale-[0.6]"
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
                    className="w-full hidden lg:block absolute -bottom-[40%] -left-[24%]  object-cover ease-out object-center rounded-xl cursor-pointer"
                  >
                    <Image
                      src={"/icons/callender.webp"}
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
                      src={"/icons/Realtimejobtraking.webp"}
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
                      src={"/icons/Realtimejobtraking.webp"}
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
                    className="w-full block lg:hidden absolute -top-[16%] right-[47%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/icons/FollowUp.webp"}
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
                    className="w-full hidden lg:block absolute -top-[16%] right-[47%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/icons/FollowUp.webp"}
                      width={600}
                      height={600}
                      alt="Dashboard"
                      className="w-full scale-[0.42]"
                    />
                  </motion.div>
                  <div
                    // whileInView={{
                    //   x: [200, 0],
                    //   scale: [0.5, 0.7, 1],
                    // }}
                    // whileHover={{ scale: [null, 1.1, 1.14] }}
                    // transition={{ duration: 0.5 }}
                    className="w-full block  lg:hidden absolute -bottom-[44%] left-[34%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/icons/talentAssessment.webp"}
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
                    className="w-full hidden lg:block absolute -bottom-[44%] left-[34%]  object-cover object-center rounded-xl"
                  >
                    <Image
                      src={"/icons/talentAssessment.webp"}
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
