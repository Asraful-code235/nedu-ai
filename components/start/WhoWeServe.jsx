"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhoWeServe() {
  return (
    <section className=" px-4 pt-4  pb-10 lg:px-16 lg:py-16 2xl:px-32">
      <motion.div className="lg:px-[70px] flex flex-col items-start lg:items-center justify-center text-center gap-3 lg:gap-[34px]">
        <h1 className="visionParagraph text-start lg:text-center text-xl lg:text-5xl xl:text-6xl font-normal leading-normal text-white text-opacity-80">
          Who we{" "}
          <span className="text-darkYellow font-extrabold relative">
            serve
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              className="absolute -top-3 -right-3 lg:-top-1 lg:-right-3"
            >
              <path
                d="M15.4403 5.20524C15.3139 4.64549 15.0489 4.12646 14.6697 3.69577C14.2905 3.26509 13.8092 2.93654 13.2699 2.74029C12.7309 2.54342 12.1511 2.48508 11.5837 2.57062C11.0162 2.65617 10.4794 2.88286 10.0224 3.22989C9.81239 2.82183 9.51299 2.46646 9.14649 2.19028C8.78 1.9141 8.35587 1.72423 7.90575 1.63486C7.45564 1.54548 6.99115 1.55889 6.54694 1.6741C6.10273 1.7893 5.69026 2.00333 5.34032 2.3002C4.99038 2.59707 4.71198 2.96913 4.52591 3.38862C4.33984 3.80811 4.25089 4.2642 4.2657 4.72287C4.28051 5.18154 4.3987 5.63094 4.61145 6.03755C4.8242 6.44416 5.12601 6.79748 5.49438 7.07116C4.75682 9.72162 3.32431 13.1667 2.70732 15.8478C2.59069 16.3568 2.91072 16.8059 3.38928 17.0161C4.1208 17.2599 5.77168 17.2124 7.52565 17.8519C9.27961 18.4914 8.99761 18.723 11.436 19.9422C11.9375 20.0893 11.9915 19.8255 12.2299 19.3608C13.4833 16.9119 15.292 13.5625 16.4334 11.0594C16.8915 11.0871 17.3499 11.0109 17.7744 10.8367C18.1989 10.6624 18.5786 10.3945 18.8852 10.053C19.1917 9.71153 19.4172 9.30521 19.5448 8.8644C19.6724 8.42359 19.6988 7.95965 19.622 7.50721C19.5453 7.05477 19.3674 6.6255 19.1015 6.25142C18.8357 5.87734 18.4889 5.56812 18.0868 5.34681C17.6848 5.12551 17.238 4.99783 16.7798 4.97332C16.3215 4.94881 15.8637 5.02808 15.4403 5.20524Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.1169 16.6197C12.274 16.2584 10.8516 15.6863 8.52448 14.8379C6.19735 13.9894 4.74017 13.5117 3.86288 13.2457"
                stroke="white"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.13086 8.53088L8.44476 11.525"
                stroke="white"
                stroke-opacity="0.8"
                stroke-linecap="round"
              />
              <path
                d="M12.7105 9.83595L11.3085 12.5691"
                stroke="white"
                stroke-opacity="0.8"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-white max-w-[1240px] mx-auto text-start lg:text-center text-opacity-80 text-sm lg:text-xl xl:text-2xl font-medium lg:leading-[166.667%] lg:tracking-[0.4px] xl:tracking-[0.48px]">
          NeduAI is designed for students, job seekers, and recruiters. Our
          platform uses AI to enhance learning experiences, streamline job
          searches, and make talent recruitment more efficient and effective.
        </p>
      </motion.div>
      <motion.div className=" mt-[64px] md:mt-[128px] lg:mt-[196px] flex flex-col-reverse xl:flex-row items-center justify-start gap-16 sm:gap-24 lg:gap-10">
        <article className="visionParagraph max-w-[733px] mx-auto xl:flex-[0.75] xl:max-w-[770px] flex flex-col items-start justify-center gap-1 lg:gap-6">
          <h3 className=" text-white text-start lg:text-center w-full text-xs  xl:text-start text-opacity-60 lg:text-4xl font-medium leading-4 lg:leading-[30px]">
            For Recruitment
          </h3>
          <h2 className="text-white w-full text-start text-[17px] lg:text-center xl:text-start font-bold lg:font-bold leading-[23.8px] lg:leading-[60px] tracking-[0.34px]  lg:tracking-[1.4px] lg:text-[40px]">
            Experience a smarter way to recruit with NeduAI
          </h2>
          <p className="text-xs lg:text-xl xl:max-w-full w-full text-start lg:text-center xl:text-start text-white font-medium lg:font-medium leading-[17.4px] tracking-[0.12px] lg:leading-[40px] mt-2 lg:-mt-2">
            Our platform enables you to efficiently search and identify top
            candidates, offering tools to filter the most suitable and committed
            applicants, saving you time from sifting through countless
            applications. Gain insights with detailed candidate statistics,
            compare their skill-upgrading activities, and utilize AI
            conversational support for deeper understanding. Additionally, stay
            informed about market trends including salaries, job roles, and
            hiring rates. Our two-way translation feature ensures candidate
            profiles are accessible in your language, streamlining recruitment
            and connecting you with the best talent effortlessly.
          </p>
        </article>
        <div className="w-full h-full flex items-center justify-center flex-1 xl:flex-[0.65] 2xl:flex-1 ">
          <div className="dashboard2Before relative">
            <div className="dashboard3Before relative">
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={"/images/Dashboard2.png"}
                  width={843}
                  height={590}
                  alt="dashboard2"
                  className="w-full h-full"
                />
              </motion.div>
              <motion.div
                whileInView={{
                  x: [200, 0],
                }}
                whileHover={{ scale: [null, 1.1, 1.14] }}
                transition={{ duration: 0.3 }}
                className="w-full  absolute bottom-[64%] -right-20"
              >
                <Image
                  src={"/icons/dashboard2Before1.png"}
                  width={843}
                  height={590}
                  alt="dashboard2"
                  className="w-full scale-[0.36]"
                />
              </motion.div>
              <motion.div
                whileInView={{
                  x: [-200, 0],
                }}
                whileHover={{ scale: [null, 1.1, 1.14] }}
                transition={{ duration: 0.3 }}
                className="w-full  absolute top-[75%] -left-[24%]"
              >
                <Image
                  src={"/icons/dashboard2Before2.png"}
                  width={843}
                  height={590}
                  className="w-full scale-[0.4]"
                  alt="dashboard2"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
