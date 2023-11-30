"use client";
import Image from "next/image";
import Button from "../shared/Button";
import Form from "./Form";
import { useState } from "react";
import Founders from "./Founders";
import Advisory from "./Advisory";
import { motion } from "framer-motion";

const founders = [
  {
    img: "/founders/filip_mc.png",
    name: "Filip Bovin",
    position: "CEO",
    division: "Strategy and Edu Vision",
    mail: "filip@nedu.ai",
    linkedIn: "https://www.linkedin.com/in/fbov",
  },
  {
    img: "/founders/pasi_o_mc.png",
    name: "Pasi Orovuo",
    position: "CTO",
    division: "Development and Security",
    mail: "pasi@nedu.ai",
    linkedIn: "https://www.linkedin.com/in/pasiorovuo",
  },
  {
    img: "/founders/Dave Brady.webp",
    name: "Dave Brady",
    position: "COO",
    division: "Solution Architect, Data Analyst ",
    mail: "dave@nedu.ai",
    linkedIn: "https://www.linkedin.com/in/dave-brady-b9167044",
  },

  {
    img: "/founders/kari_mc.png",
    name: "Kari Savolainen",
    position: "CMO",
    division: "Sales & Partnerships",
    mail: "kari@nedu.ai",
    linkedIn: "http://www.linkedin.com/in/kari-savolainen",
  },
];

export default function OurStory() {
  const [animateImage, setAnimateImage] = useState(false);

  return (
    <section className="ourStoryBg">
      <img
        src="/icons/worldmap.png"
        alt=""
        className="absolute hidden lg:block top-[20%] left-[5%] right-0 max-h-[400px] object-center object-cover bottom-0 z-10 object-fill"
      />

      {/* <Image
        src={"/icons/outteambot.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute left-[-25%] md:left-[0%] bottom-[20%] md:bottom-[12%] z-50"
      /> */}
      <Image
        src={"/icons/requestinfo.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute opacity-30 left-[-25%] md:left-[-4%] bottom-[2%] z-10 rotate-90"
      />
      <section className="visionParagraph relative pb-12 pt-6 px-4 lg:px-16 2xl:px-32  space-y-6 md:space-y-9 bg-white">
        <h1 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[67px] tracking-[0.6] lg:tracking-[0.96px]">
          Our{" "}
          <span className="text-darkYellow relative">
            Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute -top-1 -right-3"
            >
              <g clip-path="url(#clip0_639_8554)">
                <path
                  d="M3.71848 11.6485C5.32185 11.6509 6.89666 11.2242 8.27941 10.4125C8.46125 10.3059 8.44621 10.0439 8.25727 9.95013L7.27344 9.46095C8.1766 9.46095 10.0078 9.09537 10.0078 9.09537C11.9621 7.19552 12.9555 4.45513 12.7006 1.75576C12.6897 1.63835 12.638 1.52847 12.5547 1.44509C12.4713 1.36171 12.3614 1.31008 12.244 1.29912C10.8347 1.16423 9.41349 1.36078 8.09375 1.87306C8.09375 1.87306 7.64203 2.93728 7.54687 3.44533L6.99344 2.67505C6.95419 2.61974 6.89546 2.58135 6.82905 2.5676C6.76264 2.55385 6.69349 2.56577 6.63551 2.60095C4.06438 4.18005 2.35156 6.82501 2.35156 10.418"
                  stroke="#212121"
                  stroke-width="0.8125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.25781 12.7422C2.625 8.77734 7 5.35937 10.5547 3.44531"
                  stroke="#212121"
                  stroke-width="0.8125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_639_8554">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </h1>
        <article className="grid grid-cols-1 xl:grid-cols-3 lg:gap-6">
          <section className="col-span-2">
            <div className=" flex flex-col gap-[14px] justify-between h-full">
              <div className="z-50 flex flex-col gap-4 text-xs lg:text-base font-medium leading-5 lg:leading-[160%] tracking-[0.32px] transition-all duration-[2s] delay-500 ">
                <p>
                  NeduAI&apos;s journey began in Spring 2023, inspired by the
                  emerging potential of AI chatbots in education and
                  recruitment. Over the past decade, our collaboration with
                  educational institutions and engagement with international
                  talents highlighted an urgent need for adaptation in a rapidly
                  evolving global landscape. We confronted head-on the
                  challenges of widespread job losses necessitating rapid
                  reskilling, the difficulties faced by job market newcomers,
                  and the complex bureaucracy of international career pursuits.
                </p>
                <p>
                  In response, NeduAI leveraged the power of AI to bridge formal
                  and informal education with the job market, creating a
                  unified, holistic experience. Our platform redefines the skill
                  recognition process, providing substantial relief and support
                  by aligning education and recruitment to match individuals
                  with the most suitable opportunities.
                </p>
                <p>
                  Our aim is to empower both individuals and organizations,
                  utilizing technology to meet their diverse needs. Motivated by
                  curiosity and ambition, we are developing a solution that not
                  only assists companies and educational institutions in
                  efficiently sourcing top talent but also encourages
                  individuals to be self-driven, proactive, and make informed
                  decisions about their futures.
                </p>

                <div className=" flex  items-start gap-4 justify-start w-full">
                  <span className="text-2xl w-full font-semibold leading-normal tracking-[0.72px] border-b border-[#C7C7C7]">
                    Team
                  </span>
                </div>
              </div>
              <section className=" overflow-x-scroll scrollbar-hidden">
                <motion.div
                  transition={{ duration: 0.5, delayChildren: 0.5 }}
                  className=" grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6  place-items-center place-content-center w-fit"
                >
                  {founders.map((founder, key) => (
                    <Founders key={key} founder={founder} />
                  ))}
                </motion.div>
              </section>
              <section className="grid xl:hidden grid-cols-1 mt-6 md:mt-0 md:grid-cols-2 col-span-2 gap-6 lg:gap-10">
                <div className="p-[32px] lg:p-[40px] z-30 after:absolute after:content-[url('/images/threestars.svg')] after:bottom-8 after:right-8 relative before:absolute before:content-[url('/images/stars.svg')] before:top-4 before:left-5  bg-[#E4EAF5] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-center gap-2">
                  <h3 className="text-xl lg:text-[28px] font-bold leading-[32px]">
                    Strategic partnership
                  </h3>
                  <div className="w-44 text-sm font-bold flex flex-col items-center justify-center">
                    <Image
                      src={"/icons/Mask group.png"}
                      width={177}
                      height={109}
                      className="w-full h-full bg-transparent"
                    />
                  </div>
                </div>
                <Advisory />
              </section>
            </div>
          </section>
          <section className="xl:grid hidden col-span-1flex flex-col items-center justify-center md:mt-0  h-fit gap-6 lg:gap-10">
            <div className="px-[82px] py-[67px] z-50 after:absolute after:content-[url('/images/threestars.svg')] after:bottom-8 after:right-8 relative before:absolute before:content-[url('/images/stars.svg')] before:top-4 before:left-5  bg-[#E4EAF5] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl lg:text-[28px] font-bold leading-[32px]">
                Strategic partnership
              </h3>
              <div className="w-44  text-sm font-bold flex flex-col items-center justify-center">
                <Image
                  src={"/icons/Mask group.png"}
                  width={177}
                  height={109}
                  className="w-full h-full bg-transparent"
                />
              </div>
            </div>
            <div className="p-10 z-50 after:absolute after:content-[url('/images/threestars.svg')] after:bottom-8 after:right-8 relative before:absolute before:content-[url('/images/stars.svg')] before:top-4 before:left-5 bg-[#F5FDFF] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-2 lg:gap-5">
              <h3 className="text-xl  lg:text-[28px] font-bold leading-[32px]">
                Advisory board
              </h3>
              <div className="text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2">
                <p className="font-extrabold mt-2">AI Specialists</p>
                <p className="underline font-medium flex flex-wrap gap-[10px]">
                  Pasi Vuorio - LastBot
                  <a
                    href="https://www.linkedin.com/in/pasivuorio"
                    target="_blank"
                  >
                    <img
                      src="/founders/FoundersLinkedIn.svg"
                      alt="Linked In"
                      className="w-[23px] h-[23px]"
                    />
                  </a>
                </p>
                <p className="underline font-medium flex flex-wrap gap-[10px]">
                  Tero Keski-Valkama - AI, ML , KAIKO
                  <a
                    href="https://www.linkedin.com/in/terokeskivalkama"
                    target="_blank"
                  >
                    <img
                      src="/founders/FoundersLinkedIn.svg"
                      alt="Linked In"
                      className="w-[23px] h-[23px]"
                    />
                  </a>
                </p>
              </div>
              <div className="relative mt-2 text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2 xl:gap-[10px]">
                <p className="font-extrabold">Marketing & Branding</p>
                <p className="underline font-medium flex flex-wrap gap-1">
                  Karen Freese - Freese Consulting
                  <span className="flex gap-[10px]">
                    {" "}
                    (ex. PepsiCo)
                    <a
                      href="https://www.linkedin.com/in/karenfreese"
                      target="_blank"
                    >
                      <img
                        src="/founders/FoundersLinkedIn.svg"
                        alt="Linked In"
                        className="w-[23px] h-[23px]"
                      />
                    </a>
                  </span>
                </p>
              </div>
              <div className="relative mt-2 text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2 xl:gap-[10px]">
                <p className="font-extrabold">Business, Tech & Network</p>
                <p className="underline font-medium flex flex-wrap gap-[10px]">
                  Henri Vass - WeAre Solutions
                  <a
                    href="https://www.linkedin.com/in/henrivass"
                    target="_blank"
                  >
                    <img
                      src="/founders/FoundersLinkedIn.svg"
                      alt="Linked In"
                      className="w-[23px] h-[23px]"
                    />
                  </a>
                </p>
              </div>
              {/* <Image
                    src={"/images/stars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute top-[-60%] scale-[0.1] left-[-40%]"
                  /> */}
            </div>
          </section>
        </article>
        <section className="flex pt-24 flex-col xl:flex-row items-start lg:items-center xl:items-start justify-center xl:justify-between z-50 gap-10 lg:gap-28 ">
          <section className="flex flex-col items-start lg:items-center xl:items-start justify-center gap-2 lg:gap-8 xl:gap-6">
            <div className="flex mt-[66px] w-full items-start lg:items-center justify-start lg:justify-center xl:justify-start gap-3.5 ">
              <Image
                src={"/images/logo.png"}
                width={49}
                height={49}
                alt="Logo"
                className="w-7 h-7 lg:w-12 lg:h-12 object-center object-cover aspect-square"
              />
              <p className="text-black  font-medium lg:font-semibold text-base lg:text-[40px] leading-normal tracking-[0.32px] lg:tracking-[0.8px]">
                NeduAI
              </p>
            </div>
            <h3 className="text-lg lg:text-3xl text-center xl:text-start leading-5 lg:leading-3 xl:leading-10 font-semibold ">
              Investor Relations
            </h3>
            <div className="visionParagraph max-w-[441px] text-start lg:text-center xl:text-start text-sm lg:text-base font-medium leading-[19.6px] lg:leading-[187.5%] lg:tracking-[0.32px] flex flex-col gap-4 xl:gap-6">
              <p>Interested in being a part of our story ?</p>
              <p>
                Connect with us by leaving your details via email, and
                we&apos;ll promptly send you a link to our comprehensive
                investment materials.
              </p>
            </div>
          </section>
          <Form />
        </section>
        <footer className="py-3 z-40 flex items-center justify-start border-t border-[#7E7E7E]">
          &copy; 2023 NeduAI Oy
        </footer>
      </section>
    </section>
  );
}
